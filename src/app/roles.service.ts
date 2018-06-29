import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Rol } from "../rol";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  baseUrl: string = "http://localhost:3000/api/roles";

  constructor(private http: Http) { }

  addRol(newRol: Rol){        
    alert('Rol creado exitosamente');    
    return this.http.post(`${this.baseUrl}`,newRol).subscribe(res => res.json());
  }

}
