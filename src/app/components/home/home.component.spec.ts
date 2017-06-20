/// <reference path="../../datepickermodule/datepicker.module.ts" />
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GridService, PaginationConfig, Ng2TableModule, NgTableComponent } from '../../tablemodule/ng-table-module';
import { CustomDatepickerModule } from '../../datepickermodule/datepicker.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule, PaginationModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let deTable: DebugElement;
  let elTable: HTMLElement;
  let dePagination: DebugElement;
  let deButton: DebugElement;
  let elButton: HTMLElement;
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

        declarations: [HomeComponent],
        providers: [GridService, PaginationConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        de = fixture.debugElement.query(By.css('P'));
        el = de.nativeElement;
        deTable = fixture.debugElement.query(By.css('ng-table'));
        dePagination = fixture.debugElement.query(By.css('pagination'));
        fixture.detectChanges();
    });
  
   


    
  });

  it('should be created', () => {
      expect(component).toBeTruthy();
      
  });

  it('should have title', () => {
      expect(el.textContent).toBe("home works!")
  });


  it('should have Ng table', () => {
      expect(deTable).toBeTruthy();
  });

  it('should have Ng Pagination', () => {
      expect(dePagination).toBeTruthy();
  });



  it('should have grid Click', () => {
     // fixture.detectChanges();
     // debugger;
     // let deTr: Array<DebugElement> = deTable.query(By.css("table")).query(By.css("tbody")).queryAll(By.css("tr"));
     // let deTd = deTr[1].queryAll(By.css("td"));
     // debugger;
     // let deList : HTMLElement = deTd[1].nativeElement;
     // let buttons = deList.querySelectorAll("button");
     // buttons[0].click();
     // debugger;
     ////let elButton = deButton[0].nativeElement;
     ////elButton.click();
  });
 

    
});
