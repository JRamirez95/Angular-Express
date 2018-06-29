import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { appRoutes } from './routerConfig';

import {UsersService} from './users.service'; 
import {RolesService} from './roles.service'; 


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpModule
  ],
  providers: [
    UsersService,
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
