import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { NgxNZThailandSelectorService } from './ngx-nzthailand-selector.service';
import { iNZOption, iConfig, iThailandAddress } from './model/lib.model'
import PROVINCES from '../lib-assets/province';
import DISTRICTS from '../lib-assets/district';
import SUB_DISTRICTS from '../lib-assets/subdistrict';

@Component({
  selector: 'ngx-nzthailand-selector',
  /*template: `<nz-cascader [(ngModel)]="model" 
    [nzLoadData]="loadData" 
    [nzPlaceHolder]="placeholder" 
    [nzSize]="size"
    (ngModelChange)="onChanges($event)"> </nz-cascader>
  `,*/
  template: `<nz-cascader [(ngModel)]="model" 
    [nzOptions]="nzOptions"
    [nzPlaceHolder]="placeholder" 
    [nzSize]="size"
    (ngModelChange)="onChanges($event)"> </nz-cascader>
  `,
  styles: []
})
export class NgxNZThailandSelectorComponent implements OnInit {
  @Input('config') config: iConfig;
  @Input('subDistrictId') subDistrictId: number;
  @Output('onSelectedEvent') onSelectedEvent: EventEmitter<any> = new EventEmitter<any>();
  placeholder: string = `Please select`;
  size: string = `default`;
  model: any;
  nzOptions: any[] | null = null;
  constructor() { }

  ngOnInit() {
    
    if(this.config){
      this.placeholder = this.config.placeholder || this.placeholder;
      this.size = this.config.size || this.size;
    }
    
    if(this.subDistrictId){
      console.log('subDistrictId:', this.subDistrictId);
      const districtId = +SUB_DISTRICTS.find(ele=>+ele.subdistrict_id === this.subDistrictId)['ref_district_id']
      const cityId = +DISTRICTS.find(ele=>+ele.district_id === districtId)['ref_city_id']
      this.model = [
        cityId,
        districtId,
        this.subDistrictId
      ];  
    }
    this.nzOptions = this.loadOptions();
  }

  onChanges(values: string[]): void {
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

  /** load data async execute by `nzLoadData` method */
  loadData(node: any, index: number): PromiseLike<any> {
    console.log('On load data');
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          let children: iNZOption[] = [];
          // if index less than 0 it is root node
          PROVINCES.map(ele => {
            children = [...children, {
              value: ele.city_id,
              label: ele.city_name
            }]
          });
          node.children = children;
        } else if (index === 0) {
          let children: iNZOption[] = [];
          let districtList = DISTRICTS.filter(ele=>+ele.ref_city_id === +node.value)
          districtList.map(ele => {
            children = [...children, {
              value: ele.district_id,
              label: ele.district_name,
              isLeaf: false
            }]
          });
          node.children = children;
        } else {
          let children: iNZOption[] = [];
          let subDistrictList = SUB_DISTRICTS.filter(ele=>+ele.ref_district_id === +node.value)
          subDistrictList.map(ele => {
            children = [...children, {
              value: ele.subdistrict_id,
              label: ele.subdistrict_name,
              isLeaf: true
            }]
          });
          node.children = children;
        }
        resolve();
      }, 500);
    });
  }

}
