import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  
  navLinks= [
      {path:'Home',label:'Home',icon:'home'},
      {path:'Users',label:'Users',icon:'person'},
      {path:'Products',label:'Products',icon:'store'},
      {path:'Orders',label:'Orders',icon:'shopping_basket'},
      {path:'Contact',label:'Contact Us',icon:'public'}
  ]

  users = [
    {username:'anjan',password:'app12345',role:'user',id:1},
    {username:'myapp',password:'app123456',role:'Admin',id:2},
    {username:'anil',password:'app12345',role:'user',id:3}
  ]
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private http: HttpClient) { }

  getNavlinks() {
      return this.navLinks;
  }

  getUsers() {
    return this.users;
  }

  getFoods() {
    return this.foods;
  }
}
