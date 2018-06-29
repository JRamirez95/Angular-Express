import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { Rol } from '../../rol'


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[];
  current_rol = new Rol;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
  }

  // getUser(){
  //   this.userService.getUsers();
  // }

  addRol(){
    this.rolesService.addRol(this.current_rol);
    //alert("Usuario creado con exito");
    
  }

}
