import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { AdminProductslistComponent } from "./admin-productslist/admin-productslist.component";
import { RoleGuard } from "../guards/role-guard.service";
import { AuthGuard } from "../guards/auth-guard.service";

const routes: Routes = [
    {
        path:'',
        component:ProductsComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path:'admin' ,
                component: AdminProductslistComponent,
                data: {role: 'Admin'},
                canActivate: [RoleGuard]
            }
        ]
    },
    
];

@NgModule({
    imports:[ 
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class ProductRoutingModule {}