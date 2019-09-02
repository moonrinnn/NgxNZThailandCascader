import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNZThailandSelectorComponent } from './ngx-nzthailand-selector.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';

@NgModule({
  declarations: [NgxNZThailandSelectorComponent],
  imports: [
  	BrowserAnimationsModule,
  	FormsModule,
  	NzCascaderModule
  ],
  exports: [NgxNZThailandSelectorComponent],
  providers   : [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class NgxNZThailandSelectorModule { }
