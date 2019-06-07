import { FeedService } from './../services/feed.service';
import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { EventEmitter } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'myapp-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  message: string;
  postsList: any;
  albumsList: any;
  photosList: any;
  commentsList: any;
  todoList: any;
  constructor(private data: DataService, private feedService: FeedService) {
    this.getFeedResponses();
    console.log('Order - Constructor');
    
   }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.message = msg);
    console.log('Order - onInit');
  }

  newMessage() {
    // this.data.changeMessage("Hello my product is mobile");
  }

  getFeedResponses() {
    this.feedService.getDateFromMultipleSources().subscribe(responseList => {
       this.albumsList = responseList[0];
       this.photosList = responseList[1];
       this.todoList = responseList[2];
       this.postsList = responseList[3];
       this.commentsList = responseList[4];
      
    }),
    error => {
      console.error("Error");
      return Observable.throw(error);
    }
  }

}
