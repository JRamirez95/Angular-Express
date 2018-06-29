import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { User } from "../user";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:3000/api/users";

  constructor(private http: Http) { }


  getUsers(){
    return this.http.get(`${this.baseUrl}`).subscribe(res => res.json());
  }

  addUser(newUser: User){        
    alert('Usuario creado exitosamente');    
    return this.http.post(`${this.baseUrl}`,newUser).subscribe(res => res.json());
  }

  updateUser(newUser: User){
    return this.http.put(`${this.baseUrl}/${newUser.id}`,newUser)
  }

  deleteUser(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
