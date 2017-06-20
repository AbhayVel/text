import { Injectable } from '@angular/core';


/**
 * Grid Service class
 */
@Injectable()
export class GridService {

    /**
     * Sort method
     * @param data
     * @param config
     */
    public changeSort(data: any, config: any): any {

        if (!config.sorting) {
            return data;
        }
        let columns = config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;
        let sortNumber=-1;
        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '-' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
                sortNumber = i;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        let sortedData= data.sort((previous: any, current: any) => {

            let previousValue = columnName.split('.').reduce(function (prev, curr) { return prev[curr] }, previous);
            let currentValue = columnName.split('.').reduce(function (prev, curr) { return prev[curr] }, current);
            if (typeof previousValue == 'string')
            {
                previousValue = previousValue ? previousValue.toLowerCase() : previousValue;
                currentValue = currentValue ? currentValue.toLowerCase() : currentValue;
            }
            if (previousValue > currentValue) {
                return sort === 'desc' ? -1 : 1;
            } else if (previousValue < currentValue) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });

        //columns[sortNumber].sort = columns[sortNumber].sort == 'asc' ? 'desc' : 'asc';
        return sortedData;
    }

    match(filterBy, comparefilterBy, isDate, offset) {
        
        if (filterBy === "" || filterBy === undefined || filterBy ==null) {
            return true;
        }
        if (comparefilterBy == undefined || comparefilterBy == null || comparefilterBy == "") {
            return false;
        }
        if (isDate == true)
        {

            let date1 = new Date(filterBy);
            let date2= new Date(comparefilterBy)
             date2 = new Date( date2.getTime() - offset);
            if (date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear() )
            {
                return true;
            }
            else {
                return false;
            }

        }
        if (typeof comparefilterBy == 'string') {
            return comparefilterBy.toLowerCase().indexOf(filterBy.toLowerCase())>-1;
        }
        else {
            return comparefilterBy.toString().indexOf(filterBy)>-1;
        }
    }


    /**
     * Filter Method 
     * @param data
     * @param config
     */
    public changeFilter(data: any, config: any): any {
        config.page = 1;
        let filteredData: Array<any> = data;
        config.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    let value = column.name.split('.').reduce(function (prev, curr) { return prev[curr] }, item);
                    return this.match(column.filtering.filterString, value, column.isDate, column.offset);                    
                });
            }
        });

        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) => {
                let value = config.filtering.columnName.split('.').reduce(function (prev, curr) { return prev[curr] }, item);
                return this.match(config.filtering.filterString, value,null,null);               
            });
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            config.columns.forEach((column: any) => {
                let value = column.name.split('.').reduce(function (prev, curr) { return prev[curr] }, item);
                flag = this.match(config.filtering.filterString, value, column.isDate, column.offset) || flag;                
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    }

    /**
     * Get current page
     * @param page
     * @param data
     */
    getPageStart(page: any, data: Array<any>): number {
        if (data.length == 0) {
            return 1;
        }
        let start = (page.page - 1) * page.itemsPerPage;
        if (start > data.length) {
            page.page = page.page - 1;
            return this.getPageStart(page, data);
        }
        return start;
    }

    /**
     * Change Page Method
     * @param page
     * @param data
     */
   
    public changePage(page: any, data: Array<any>): Array<any> {
        let start = this.getPageStart(page, data);
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    /**
     * Onchange Table method
     * @param config
     * @param page
     */
    public onChangeTable(config: any, page: any): any {
        if (config.filtering) {
            Object.assign(config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(config.sorting, config.sorting);
        }
        let filteredData = this.changeFilter(config.data, config);
        let sortedData = this.changeSort(filteredData, config);
        config.length = filteredData.length;
        config.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    }

    /**
     * On cell click method
     * @param data
     */
    public onCellClick(data: any): any {
    }
}