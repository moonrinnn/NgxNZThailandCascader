import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxNZThailandSelectorModule } from 'ngx-nzthailand-selector';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	HttpClientModule,
    BrowserModule,
    NgxNZThailandSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
