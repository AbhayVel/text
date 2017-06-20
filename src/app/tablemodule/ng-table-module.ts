/// <reference path="table/grid.service.ts" />
import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgTableComponent } from './table/ng-table.component';
import { NgTableFilteringDirective } from './table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './table/ng-table-paging.directive';
import { NgTableSortingDirective } from './table/ng-table-sorting.directive';
import { DatepickerModule, ModalModule } from 'ngx-bootstrap';
import { CustomDatepickerModule } from '../datepickermodule/datepicker.module';
import { PaginationConfig } from './table/paginationconfig.service'
export { PaginationConfig } from './table/paginationconfig.service'

import { GridService } from './table/grid.service'
export { GridService } from './table/grid.service'

export { NgTableComponent } from './table/ng-table.component';
export { NgTableFilteringDirective } from './table/ng-table-filtering.directive';
export { NgTablePagingDirective } from './table/ng-table-paging.directive';
export { NgTableSortingDirective } from './table/ng-table-sorting.directive';


@NgModule({
    imports: [CommonModule, FormsModule, BrowserModule,
        ModalModule.forRoot(),
        CustomDatepickerModule
    ],
    declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective],
    exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective ]
})
export class Ng2TableModule {
}
