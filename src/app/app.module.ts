import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatepickerModule, PaginationModule } from 'ngx-bootstrap';
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
      HttpModule,
      Ng2TableModule,
      CustomDatepickerModule,
      PaginationModule.forRoot(),
      DatepickerModule.forRoot()
  ],
  providers: [PaginationConfig, GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
