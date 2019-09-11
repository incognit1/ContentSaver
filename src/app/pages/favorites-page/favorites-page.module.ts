import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';
import { FavoritesWrapperComponent } from './containers/favorites-wrapper/favorites-wrapper.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentStateModule } from '../../shared/modules/component-state/component-state.module';
import { EditFavoriteDialogComponent } from './components/edit-favorite-dialog/edit-favorite-dialog.component';
import { CustomComponentsModule } from '../../shared/modules/custom-components/custom-components.module';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';

const MATERIAL = [
    MatCardModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
];
@NgModule({
    declarations   : [
        FavoritesPageComponent,
        FavoritesWrapperComponent,
        FavoriteListComponent,
        EditFavoriteDialogComponent,
    ],
    imports        : [
        CommonModule,
        ...MATERIAL,
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
