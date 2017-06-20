import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import {   FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Ng2TableModule, PaginationConfig, GridService, NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from './tablemodule/ng-table-module';
import { CustomDatepickerModule } from './datepickermodule/datepicker.module';
import { DatepickerModule, PaginationModule } from 'ngx-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [
             
              BrowserModule,
              FormsModule,
              HttpModule,
              Ng2TableModule,
              CustomDatepickerModule,
              PaginationModule.forRoot(),
              DatepickerModule.forRoot(),
              CommonModule
          ],
      declarations: [
          AppComponent,
          HomeComponent 
          

        ],
      providers: [PaginationConfig,GridService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
