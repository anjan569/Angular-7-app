import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './product-routing.module';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { AdminProductslistComponent } from './admin-productslist/admin-productslist.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    AdminProductslistComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    AuthGuard,
    RoleGuard
  ]
  
})
export class ProductModule { }
