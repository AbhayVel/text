import { Component, Input, Output, ElementRef, EventEmitter, ViewChild} from '@angular/core';

@Component({
    selector: 'calendar',
    host: {
        '(document:click)': 'onClick($event)',
    },
    templateUrl:'./datepicker.component.html',
    styles: []
})
export class CustomDatepickerComponent {
  @Input('dateModel') dateModel: any;
  @Input('minDate') minDate: any;
    @Input() isRequired: boolean = true;
    @Input() placeholder: string = '';
    @Output() callBackEvent: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('begin') begin: any;
    public showDatepicker: boolean = false;

    constructor(private _eref: ElementRef) { }
 
    onClickedOutside(event: any) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showDatepicker = false;
        }
    }
    showPopup() {
        this.showDatepicker = true;
    }
    setValue(ele: any)
    {
        if (ele.value == '')
        {
            ele.setAttribute("placeholder", this.placeholder)
            this.dateModel = null;
        }
    }
    onClick(event: any) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showDatepicker = false;
        }
    }

    onSelectionDone(event: any) {
        this.callBackEvent.emit(event);
    }
}
