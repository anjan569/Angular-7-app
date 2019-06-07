import { HeroJobAdComponent } from './../ad-banner/hero-job-ad.component';
import { AdItem } from './../shared/ad-item';
import { HeroProfileComponent } from './../ad-banner/hero-profile.component';
import { Injectable } from '@angular/core';
@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem( HeroProfileComponent, {name: 'Anjan',bio:'Brave as they come'}),
            new AdItem( HeroProfileComponent, {name: 'Ramya',bio:'Smart as they come'}),
            new AdItem( HeroJobAdComponent, {headline: 'Hiring for several positions',body:'Submit your resume today!'}),
            new AdItem( HeroJobAdComponent, {headline: 'Opening in all departments',body:'Apply!'}),


        ]
    }
}