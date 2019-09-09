import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';


@NgModule({
  declarations: [ FavoritesPageComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    FavoritesPageComponent,
  ]
})
export class FavoritesPageModule {
}
