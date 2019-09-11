import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchStoreEffects } from './effects';
import { reducer } from './reducer';

@NgModule({
    imports  : [
        CommonModule,
        StoreModule.forFeature('search', reducer),
        EffectsModule.forFeature([ SearchStoreEffects ]),
    ],
    providers: [ SearchStoreEffects ],
})
export class SearchStoreModule {
}
