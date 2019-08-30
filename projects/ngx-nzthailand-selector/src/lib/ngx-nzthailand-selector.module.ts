import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNZThailandSelectorComponent } from './ngx-nzthailand-selector.component';
//import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';

@NgModule({
  declarations: [NgxNZThailandSelectorComponent],
  imports: [
  	BrowserAnimationsModule,
  	FormsModule,
  	//HttpClientModule,
  	NzCascaderModule
  ],
  exports: [NgxNZThailandSelectorComponent]
})
export class NgxNZThailandSelectorModule { }
