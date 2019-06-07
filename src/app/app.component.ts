import { AdService } from './services/ad.service';
import { AdItem } from './shared/ad-item';
import { Component, OnInit, NgZone } from '@angular/core';


@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'angular7-curdapp';
  public clickedEvent: Event;
  ads: AdItem[];
  public addrKeys: string[];
  public addr: object;
  constructor( private zone: NgZone, private adService: AdService){


  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

   //Method to be invoked everytime we receive a new instance 
  //of the address object from the onSelect event emitter.
  //setAddress(addrObj) {
     //We are wrapping this in a NgZone to reflect the changes
    //to the object in the DOM.
  //   this.zone.run(() => {
  //     this.addr = addrObj;
  //     this.addrKeys = Object.keys(addrObj);
  //   });
  // }
}


