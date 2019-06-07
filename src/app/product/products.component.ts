import { UsersService } from './../services/users.ervice';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Food } from '../shared/food';
import { SharedService } from '../shared/shared.servcies';
import { DataService } from '../services/data.service';
import { ProductService } from './product.service';

@Component({
  selector: 'myapp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  selectedItem: any;

  
  constructor(private _authservice: AuthService, 
    private _sharedService: SharedService, 
    private data: DataService,
    private userService: UsersService,
    private productservice: ProductService) { 
        this.products = productservice.getProducts();
    }
  selectedFood1: string = 'pizza';
  foods: Food[];
  message: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.getAllItems();
    
  }

 

  onSelect(str: any) {
    this.selectedItem = str;

    console.log(this.selectedItem);
  }

  getAllItems() {
   this.foods =  this._sharedService.getFoods();
  }

  logout() {
    this._authservice.logout();
  }

  selectProduct(event) {
    if (event.value == null) {
      event.value = '';
    }else {
      this.data.changeMessage(event.value);
    }
  }

  

}
