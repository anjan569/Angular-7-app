import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { decode } from "punycode";
import { SharedService } from "../shared/shared.servcies";
import { User } from "../shared/users";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private message: string;

    user: User[];
    constructor(private _router: Router,private userservice: SharedService) {
        this.user =   this.userservice.getUsers();
     }

    clear() {
        localStorage.clear();
    }

    isAuthenticated(): boolean {

        return localStorage.getItem('token') != null;
    }

    isTokenExpired(): boolean{
        return false;
    }

    login( name: string, psw: string) {
        // localStorage.setItem('token',`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE`);
        console.log(name,psw);
        if(this.user) {
            for(let u of this.user) {
                if(u.username === name && u.password === psw) {
                    localStorage.setItem('token',this.setToken(u))
                    this._router.navigate(['/Products']);
                }
            }
        }
    }

    setToken(u: User): string {
        return u.username + '|' + u.role + '|' + u.password;
    }

    logout() {
        this.clear();
        this._router.navigate(['/login']);
    }

    decode(){
        
        let tokenstr: string = localStorage.getItem('token');

        let user: any = tokenstr.split('|');

        return user;
    }
}
