import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';
import { FavoritesWrapperComponent } from './containers/favorites-wrapper/favorites-wrapper.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentStateModule } from '../../shared/modules/component-state/component-state.module';


@NgModule({
  declarations: [
    FavoritesPageComponent,
    FavoritesWrapperComponent,
    FavoriteListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentStateModule,
  ],
  exports: [
    FavoritesPageComponent,
  ]
})
export class FavoritesPageModule {
}
