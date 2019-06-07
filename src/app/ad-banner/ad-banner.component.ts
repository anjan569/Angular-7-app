import { AdComponent } from './ad.component';
import { AdDirective } from './../shared/ad.directive';
import { AdItem } from './../shared/ad-item';
import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

@Component({
  selector: 'ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy{

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent()
    },3000);
  }

  loadComponent() {
    
    this.currentAdIndex = ( this.currentAdIndex + 1) % this.ads.length;
    
    let adItem = this.ads[this.currentAdIndex];

    let componentFacotry = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();

    let componenrRef = viewContainerRef.createComponent(componentFacotry);
    (<AdComponent>componenrRef.instance).data = adItem.data;
  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

}
