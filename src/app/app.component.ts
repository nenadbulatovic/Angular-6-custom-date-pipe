import { Component, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assigment 5 by Nenad Bulatovic';
  

  userInput = new Date();
  showElapsed = false;

  constructor() {
    this.userInput = new Date();
  }

  @ViewChild('input', { read: MatInput }) input: MatInput;
  ngAfterViewInit() { }

  resetDate() {
    this.input.value = '';
    this.userInput = new Date();
    this.showElapsed = false;
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.userInput = new Date(event.value);
    this.showElapsed = true;
  }

}
