import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Event } from '../classes/event';

@Component({
  selector: 'myapp-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
 // @Output() eventClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(event: Event): void {
   // this.eventClicked.emit(event);
  }

}
