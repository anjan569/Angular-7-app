import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private _authservice: AuthService, private _router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
        const user = this._authservice.decode();
        console.log(user[1]);
        if(user[1] === next.data.role) {
            return true;
        }

        this._router.navigate(['/login']);
        return false;
    }
}