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
    @Input() dateModel: Date;
    @Input() minDate: Date;
    @Input() isRequired: boolean = true;
    @Input() placeholder: string = '';
    @Output() callBackEvent: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('begin') begin: Element;
    private showDatepicker: boolean = false;

    constructor(private _eref: ElementRef) { }
 
    onClickedOutside(event) {
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
    onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showDatepicker = false;
        }
    }

    onSelectionDone(event) {
        this.callBackEvent.emit(event);
    }
}