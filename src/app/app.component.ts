import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assigment 5 by Nenad Bulatovic';

  elapsedTime;
  currentDate = new Date();

  constructor() {
		this.elapsedTime = new Date();
	}
	
	resetLastUpdated() {
    this.elapsedTime = new Date();
  }
  
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.elapsedTime = new Date(event.value);
  }

}
