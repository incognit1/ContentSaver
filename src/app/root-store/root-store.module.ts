import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FiltersStoreModule } from './filters-store';
import { FavoritesStoreModule } from './favorites-store';
import { SearchStoreModule } from './search-store';

@NgModule({
    imports     : [
        CommonModule,
        SearchStoreModule,
        FavoritesStoreModule,
        FiltersStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
        }),
    ],
    declarations: [],
})
export class RootStoreModule {
}
