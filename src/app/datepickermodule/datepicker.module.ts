import { NgModule } from '@angular/core';
import {
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { CustomDatepickerComponent } from './datepicker.component';
import { CustomClickOutsideDirective } from './datepicker.outside.directive';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ModalModule, DatepickerModule } from 'ngx-bootstrap';

@NgModule({
    imports: [CommonModule, FormsModule, BrowserModule,
        ModalModule.forRoot(),
        DatepickerModule.forRoot()
    ],
    declarations: [CustomDatepickerComponent, CustomClickOutsideDirective],
    exports: [CustomDatepickerComponent, CustomClickOutsideDirective]
})
export class CustomDatepickerModule {

}