import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { NgxNZThailandSelectorService } from './ngx-nzthailand-selector.service';
import { iNZOption, iConfig, iThailandAddress } from './model/lib.model'
import PROVINCES from '../lib-assets/province';
import DISTRICTS from '../lib-assets/district';
import SUB_DISTRICTS from '../lib-assets/subdistrict';

@Component({
  selector: 'ngx-nzthailand-selector',
  template: `<nz-cascader [(ngModel)]="model" 
    [nzMenuClassName]="'nzthailand-wrapper'"
    [nzOptions]="nzOptions"
    [nzPlaceHolder]="placeholder" 
    [nzSize]="size"
    [nzDisabled]="isDisabled"
    [nzShowSearch]="showSearch"
    (nzVisibleChange)="onVisibleChange($event)"
    (ngModelChange)="onChanges($event)"> </nz-cascader>
  `,
  styles: [
    `
      .ant-cascader-picker {
        width: 100%;
      }
      .ant-cascader-menu {
        scroll-behavior: smooth;
      }
    `
  ]
})
export class NgxNZThailandSelectorComponent implements OnInit {
  @Input('config') config: iConfig;
  @Input('subDistrictId') subDistrictId: number|string;
  @Output('onSelectedEvent') onSelectedEvent: EventEmitter<any> = new EventEmitter<any>();
  placeholder: string = `Please select`;
  size: string = `default`;
  showSearch: boolean = false;
  isDisabled: boolean = false;
  model: any;
  nzOptions: any[] | null = null;
  timeOut: any;
  constructor() { }

  ngOnInit() {
    
    if(this.config){
      this.placeholder = this.config.placeholder || this.placeholder;
      this.size = this.config.size || this.size;
      this.showSearch = this.config.showSearch || this.showSearch;
      this.isDisabled = this.config.disabled || this.isDisabled;
    }
    
    if(+this.subDistrictId){
      const districtId = +SUB_DISTRICTS.find(ele=>+ele.subdistrict_id === +this.subDistrictId)['ref_district_id']
      const cityId = +DISTRICTS.find(ele=>+ele.district_id === districtId)['ref_city_id']
      this.model = [
        cityId,
        districtId,
        +this.subDistrictId
      ];  
    }
    this.nzOptions = this.loadOptions();
  }

  scrollTo(elementId) {
    var el = document.getElementById(elementId);
    el.scrollIntoView(true);
  }
  
  onVisibleChange(isOpen: boolean) {
    if (!isOpen) return;
    if (this.timeOut) clearTimeout(this.timeOut);
    
    this.timeOut = setTimeout(()=>{
      let eleActiveList = document.querySelectorAll('.nzthailand-wrapper .ant-cascader-menu .ant-cascader-menu-item-active');
      eleActiveList.forEach(ele=>{
        ele.scrollIntoView(true);
      });
    }, 500);
  }

  onChanges(values: string[]): void {

    if (!values || !values.length) {
      return;
    }
    const subDistrictResult = SUB_DISTRICTS.find(ele=>+ele.subdistrict_id === +values[2]);
    const result: iThailandAddress = {
      city_id: values[0].toString(),
      city_name: PROVINCES.find(ele=>+ele.city_id === +values[0])['city_name'],
      district_id: values[1],
      district_name: DISTRICTS.find(ele=>+ele.district_id === +values[1])['district_name'],
      subdistrict_id: values[2],
      subdistrict_name: subDistrictResult['subdistrict_name'],
      zipcode: subDistrictResult['zipcode']
    }
    this.onSelectedEvent.emit(result);
  }

  loadOptions() {
    let children: iNZOption[] = [];
    // if index less than 0 it is root node
    PROVINCES.map(province => {
      let districtList = DISTRICTS.filter(district=>+district.ref_city_id === +province.city_id)
      let districtChildren: iNZOption[] = [];
      districtList.map(district => {
        let subdistrictChildren: iNZOption[] = [];
        let subDistrictList = SUB_DISTRICTS.filter(subdistrict=>+subdistrict.ref_district_id === +district.district_id)
        subDistrictList.map(subdistrict => {
          subdistrictChildren = [...subdistrictChildren, {
            value: +subdistrict.subdistrict_id,
            label: subdistrict.subdistrict_name,
            isLeaf: true
          }]
        });
        districtChildren = [...districtChildren, {
          value: +district.district_id,
          label: district.district_name,
          children: subdistrictChildren,
          isLeaf: false
        }]
      });
      children = [...children, {
        value: +province.city_id,
        label: province.city_name,
        children: districtChildren
      }]
    });
    return children;
  }

}
