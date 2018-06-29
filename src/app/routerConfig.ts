// routerConfig.ts

import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

export const appRoutes: Routes = [
  { path: 'create',
    component: UsersComponent
  },

  { path: 'createrol',
    component: RolesComponent
  }
];
