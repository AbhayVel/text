/// <reference path="components/home/home.component.ts" />
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = "app works!";
}
