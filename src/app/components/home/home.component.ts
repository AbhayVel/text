import { Component, OnInit } from '@angular/core';
import { GridService } from '../../tablemodule/ng-table-module'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    data = [
        {
            id: 1,
           name: "Abhay"
        },
        {
            id: 2,
            name: "Ajay"
        },
        {
            id: 3,
            name: "Kalpesh"
        }

    ];
    private columns: Array<any> = [
        { title: 'Name', name: 'name', sort: 'asc', filtering: { filterString: '', placeholder: 'Filter by name' } },
        { title: 'Action', name: 'action', html: '<button class="btn" key="edit"><i key="edit" class="glyphicon glyphicon-edit"></i>&nbsp;Edit</button>&nbsp;&nbsp;<button class="btn" key="delete"><i key="delete" class="glyphicon glyphicon-remove"></i>&nbsp;Delete</button>', isCustom: true, sort: false, isHeaderClicked: true }
    ];
    public config=  {
        paging: true,
        columns: this.columns,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered'],
        rows: [],
        data: [],
        page: 1,
        itemsPerPage: 10,
        maxSize: 5,
        numPages: 1,
        length: 0
    };
    

    constructor(private gridService: GridService) {
        this.config.data = this.data;

    }

    ngOnInit() {

        this.onChangeTable(this.config);
  }



  /*******************Grid Events Start ********************/
  /**
   * This change Page event 
   * @param page
   * @param data
   */
  public changePage(page: any, data: Array<any>): Array<any> {
      return this.gridService.changeSort(page, data);
  }

  /**
   * This change Page event Change sort Event
   * @param data
   * @param config
   */
  public changeSort(data: any, config: any): any {
      return this.gridService.changeSort(data, config);
  }

  /**
   * This change Filter event Change sort Event
   * @param data
   * @param config
   */
  public changeFilter(data: any, config: any): any {
      return this.gridService.changeFilter(data, config);
  }


  /**
   * This is On Change event Change sort Event
   * @param config
   * @param page
   */
  public onChangeTable(config: any, page: any = { page: this.config.page, itemsPerPage: this.config.itemsPerPage }): any {
      this.gridService.onChangeTable(config, page);
  }

  public onCellClick(data: any): any {
      debugger;
      if (data.column.name == 'action') {
          if (data.event.srcElement.getAttribute("Key") == 'edit') {
              alert("I am in Edit");
          }
          else if (data.event.srcElement.getAttribute("Key") == 'delete') {
              alert("I am in Delete");
          }
      }
  }

    /*******************Grid Events End ********************/
    /***************** Components Methods End ******************/


  


}
