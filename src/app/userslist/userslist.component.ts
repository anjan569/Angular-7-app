import { UsersService } from './../services/users.ervice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  keys:any[];
  users: any;
  
  

  constructor(private userService: UsersService) {
    this.getUsers();
   }

  ngOnInit() {
  }

  getUsers(){
    this.userService.getUsers()
    this.userService.getUsers().subscribe(data => {
      this.users = data
      this.keys = Object.keys(this.users[0]);
    });
  }

}
