import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authservice: AuthService, private _router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
        
        if(this._authservice.isAuthenticated()) {
            console.log('hello this is authguard');
            return true;
        }

        this._router.navigate(['/login']);
        return false;
    }
 }