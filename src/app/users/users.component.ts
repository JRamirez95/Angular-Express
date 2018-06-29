import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: User[];
  current_user = new User;

  constructor(private userService: UsersService ) { }

  ngOnInit() {
  }

  getUser(){
    this.userService.getUsers();

  }

  addUser(){
    this.userService.addUser(this.current_user);
    //alert("Usuario creado con exito");
    
  }

}
