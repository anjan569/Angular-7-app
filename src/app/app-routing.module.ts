import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'Home',component: WelcomeComponent},
  {
    path:'Products',
    loadChildren: './product/product.module#ProductModule'
  },
  { path:'Orders',component: OrderComponent},
  { path:'Contact',component: ContactComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
