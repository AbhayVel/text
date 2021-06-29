import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import {  PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2TableModule, PaginationConfig,GridService } from './tablemodule/ng-table-module';
import { CustomDatepickerModule } from './datepickermodule/datepicker.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      
      Ng2TableModule,
      CustomDatepickerModule,
      PaginationModule.forRoot(),
      DatepickerModule.forRoot()
  ],
  providers: [PaginationConfig, GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
