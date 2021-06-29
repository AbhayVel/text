import { Component, EventEmitter, Input, Output, DoCheck } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CustomDatepickerModule } from '../../datepickermodule/datepicker.module';

@Component({
    selector: 'ng-table',
    templateUrl: 'ng-table.component.html',
    styleUrls: ['./ng-table.component.scss']
})
export class NgTableComponent implements DoCheck {
    // Table values
    @Input() public rows: Array<any> = [];
    isRequired: boolean = false;
    dDate: Date = new Date();
    @Input()
    public set config(conf: any) {

        if (!conf.className) {
            conf.className = 'table-striped table-bordered';
        }
        if (conf.className instanceof Array) {
            conf.className = conf.className.join(' ');
        }
        this._config = conf;
    }

    ngDoCheck() {
    }

    // Outputs (Events)
    @Output() public tableChanged: EventEmitter<any> = new EventEmitter();
    @Output() public cellClicked: EventEmitter<any> = new EventEmitter();
    @Output() public headerClicked: EventEmitter<any> = new EventEmitter();

    public showFilterRow: Boolean = false;

    @Input()
    public set columns(values: Array<any>) {
        values.forEach((value: any) => {
            if (value.filtering) {
                this.showFilterRow = true;
            }
            if (value.className && value.className instanceof Array) {
                value.className = value.className.join(' ');
            }
            let column = this._columns.find((col: any) => col.name === value.name);
            if (column) {
                Object.assign(column, value);
            }
            if (!column) {
                this._columns.push(value);
            }
        });
    }

    private _columns: Array<any> = [];
    private _config: any = {};

    public constructor(private sanitizer: DomSanitizer) {
    }

    public sanitize(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public get columns(): Array<any> {
        return this._columns;
    }

    public get config(): any {
        return this._config;
    }

    public get configColumns(): any {
        let sortColumns: Array<any> = [];

        this.columns.forEach((column: any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
            if (column.sort === '') {
                column.sort = '-';
            }
        });

        return { columns: sortColumns };
    }

    onSortChangeTable(column: any): void {
        if (column.sort == 'asc' || column.sort == 'desc' || column.sort === '-') {
            this.onChangeTable(column);
        }
    }

    callBackEvent($event : any, column: any) {
        if (column.transform && column.transformParameter) {
            
            let offSet = column.transformParameter[column.transformParameter.length - 1].modal.offset;
            column.offset = offSet;
            column.filtering.filterString =  $event;

        }
        else {
            column.filtering.filterString = $event;
        }

        this.onChangeTable(column);
    }


    public onChangeTable(column: any): void {
        this._columns.forEach((col: any) => {
            if (col.name !== column.name && col.sort != false) {
                if (col.sort == 'asc' || col.sort == 'desc' || col.sort === '') {
                    col.sort = '-';
                }

            }

        });

        this.tableChanged.emit({ sorting: this.configColumns });
    }

    public getData(row: any, column: any): string {
        if (column.isCustom == true) {
            return column.html;
        }
        let data = column.name.split('.').reduce((prev: any, curr: string) => prev[curr], row);
        if (column.transform) {

            if (column.transformParameter) {
                let type = column.transformParameter[0];
                let dataArray = column.transformParameter.slice(1, column.transformParameter.length)
                dataArray.unshift(data);
                return column.transform.apply(type, dataArray);
            }
            return column.transform(data);
        }
        return data;
    }

    public headerClick(column: any, event: any): void {
        if (column.isHeaderClicked == true) {
            this.headerClicked.emit({ column, event });
        }
    }

    public cellClick(row: any, column: any, event: any): void {
        this.cellClicked.emit({ row, column, event });
    }
}
