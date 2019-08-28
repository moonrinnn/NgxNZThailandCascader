import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxNZThailandSelectorService } from './ngx-nzthailand-selector.service';
import { iNZOption } from './model/lib.model'
import PROVINCES from '../lib-assets/province';
import DISTRICTS from '../lib-assets/district';
import SUB_DISTRICTS from '../lib-assets/subdistrict';

@Component({
  selector: 'ngx-nzthailand-selector',
  template: `
    <nz-cascader [(ngModel)]="values" [nzLoadData]="loadData" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `,
  styles: []
})
export class NgxNZThailandSelectorComponent implements OnInit {
  @Input('values') values: string[];
  @Output('onSelectedEvent') onSelectedEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private ngxNZThailandSelectorService: NgxNZThailandSelectorService) { }

  ngOnInit() {

  }

  onChanges(values: any): void {
    console.log(values, this.values);
    this.onSelectedEvent.emit(this.values);
  }

  /** load data async execute by `nzLoadData` method */
  loadData(node: any, index: number): PromiseLike<any> {
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
      }, 1000);
    });
  }

}
