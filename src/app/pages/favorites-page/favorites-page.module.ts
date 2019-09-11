import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';
import { FavoritesWrapperComponent } from './containers/favorites-wrapper/favorites-wrapper.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentStateModule } from '../../shared/modules/component-state/component-state.module';
import { EditFavoriteDialogComponent } from './components/edit-favorite-dialog/edit-favorite-dialog.component';
import { CustomComponentsModule } from '../../shared/modules/custom-components/custom-components.module';


@NgModule({
    declarations   : [
        FavoritesPageComponent,
        FavoritesWrapperComponent,
        FavoriteListComponent,
        EditFavoriteDialogComponent,
    ],
    imports        : [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        ComponentStateModule,
        CustomComponentsModule,
    ],
    entryComponents: [
        EditFavoriteDialogComponent,
    ],
    exports        : [
        FavoritesPageComponent,
    ],
})
export class FavoritesPageModule {
}
