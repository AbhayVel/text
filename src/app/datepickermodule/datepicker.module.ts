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
import { DOCUMENT } from '@angular/common';
import { CustomDatepickerComponent } from './datepicker.component';
import { CustomClickOutsideDirective } from './datepicker.outside.directive';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [CommonModule, FormsModule, BrowserModule,          
        DatepickerModule.forRoot()
    ],
    declarations: [CustomDatepickerComponent, CustomClickOutsideDirective],
    exports: [CustomDatepickerComponent, CustomClickOutsideDirective]
})
export class CustomDatepickerModule {

}
