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

### iConfig 
| Key            | Type                        | Description                          |
| ---------------| --------------------------- | ------------------------------------ |
| placeholder 	 | string  					   | placeholder text 			          |
| showSearch 	 | boolean 					   | can be typed for searching or not    |
| size 	 		 | 'small', 'default', 'large' | the size of box 					  |
| disabled 	 	 | boolean  				   | disabled it or not 				  |

<br>

### @Inputs()

| Input            | Type    | Required                   | Description                      |
| ---------------- | ------- | -------------------------- | -------------------------------- |
| subDistrictId    | number  | Optional                   | the sub-district id of Thailand  |
| config	       | number  | Optional, default: iConfig | the configuration of style 	     |

<br>

### @Outputs()

| Output           | Type     | Required | Description                                            |
| ---------------- | -------- | -------- | ------------------------------------------------------ |
| onSelectedEvent  | function | **YES**  | emits filtered data list depending on the search term. |


