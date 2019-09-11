import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FavoritesStoreEffects } from './effects';
import { reducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('favorite', reducer),
    EffectsModule.forFeature([FavoritesStoreEffects])
  ],
  providers: [FavoritesStoreEffects]
})
export class FavoritesStoreModule {}
