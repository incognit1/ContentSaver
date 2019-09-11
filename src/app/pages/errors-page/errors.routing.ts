// angular
import { RouterModule } from '@angular/router';
import { Error403Component } from './403/error-403.component';
import { Error404Component } from './404/error-404.component';

export const errorRouting = RouterModule.forChild([
  {
    path: '403',
    component: Error403Component,
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '**',
    component: Error404Component,
  },
]);
