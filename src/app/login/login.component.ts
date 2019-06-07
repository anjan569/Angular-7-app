import { UsersService } from './../services/users.ervice';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'myapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authservice: AuthService) { }
  username: string;
  password: string;

  ngOnInit() {
  }

  login(){
    this._authservice.login(this.username,this.password);
  }
}
