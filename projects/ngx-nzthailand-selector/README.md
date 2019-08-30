# NgxNZThailandSelector

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.3.

## Installation instructions

Install ngx-nzthailand-selector from npm: <br>
Run `npm i ngx-nzthailand-selector --save`

Install ngx-nzthailand-selector from yarn: <br>
Run `yarn add ngx-nzthailand-selector`


Add package to NgModule imports:

```
import { NgxNZThailandSelectorModule } from 'ngx-nzthailand-selector';

@NgModule({
  ...
  imports: [NgxNZThailandSelectorModule, ...]
  ...
})
```

Add component to your page:

```
<ngx-nzthailand-selector 
	[config]="{'placeholder': 'เลือก', 'showSearch': true}" 
	[subDistrictId]="2496" 
	(onSelectedEvent)="onCascaderChange($event)">
</ngx-nzthailand-selector>
```


You will need `ng-zorro-antd` styles:

```
@import "~ng-zorro-antd/style/entry.less"; /* Import basic styles */
@import "~ng-zorro-antd/cascader/style/entry.less"; /* Import styles of the component */
```