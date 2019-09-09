// angular
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// app
import { MatIconModule } from '@angular/material';
import { Error403Component } from './403/error-403.component';
import { ErrorRouting } from './errors.routing';
import { Error404Component } from './404/error-404.component';

@NgModule({
  declarations: [
    Error403Component,
    Error404Component,
  ],
  imports     : [
    ErrorRouting,
    CommonModule,
    MatIconModule,
  ],
  bootstrap   : [],

})
export class ErrorsModule {
}
