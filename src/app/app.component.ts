import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assigment5 by Nenad Bulatovic';

  lastUpdated;

  constructor() {
		this.lastUpdated = new Date();
	}
	
	resetLastUpdated() {
    this.lastUpdated = new Date();
  }
  
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    this.lastUpdated = new Date(event.value);
  }

}
