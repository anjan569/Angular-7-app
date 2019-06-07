import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  count: number= 0;
  constructor() { 
    setInterval(this.refreshpage, 5000);
  }

  changeMessage(msg: string) {
    this.messageSource.next(msg);
  }

  refreshpage() {
    this.count++;
    // this.changeMessage(this.count.toString());
    
  }

  


}
