import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable() 
export class UsersService {
    
    usersUrl: string ='https://jsonplaceholder.typicode.com/users';
    
    constructor(private http: HttpClient){

    }

    getUsers() {
      return  this.http.request('GET',this.usersUrl,{responseType: 'json'});
    }
}