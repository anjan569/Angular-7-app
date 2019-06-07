import { AdService } from './../services/ad.service';
import { AdItem } from './../shared/ad-item';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  
  products = [];

  constructor(private adService: AdService) {
    this.products = this.getProducts();
    console.log('product - init');
    
   }

  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }
}
