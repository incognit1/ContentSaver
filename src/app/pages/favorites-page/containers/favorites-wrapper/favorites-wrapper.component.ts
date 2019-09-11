import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FavoritesStoreActions, FavoritesStoreSelectors, RootStoreState } from '../../../../root-store';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { FavoriteItemModel } from '../../../../shared/models/favorite-item.model';
import { MatDialog } from '@angular/material';
import { EditFavoriteDialogComponent } from '../../components/edit-favorite-dialog/edit-favorite-dialog.component';
import { filter, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../../../../shared/modules/custom-components/components/confirm-dialog/confirm-dialog.component';
import { load } from '../../../../root-store/favorites-store/actions';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
    selector   : 'app-favorites-wrapper',
    templateUrl: './favorites-wrapper.component.html',
    styleUrls  : [ './favorites-wrapper.component.sass' ],
})
export class FavoritesWrapperComponent implements OnInit, OnDestroy {
    favoriteItems$: Observable<FavoriteItemModel[]>;
    state$: Observable<ComponentState>;

    constructor(
        private store: Store<RootStoreState.State>,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
        this.favoriteItems$ = this.store.select(FavoritesStoreSelectors.selectFavoriteItems);
        this.state$         = this.store.pipe(select(FavoritesStoreSelectors.selectFavoritesState));

        this.favoriteItems$.pipe(
            filter(items => !items || (items && !items.length)),
            take(1),
            untilDestroyed(this),
        ).subscribe(() => {
            this.store.dispatch(load());
        });
    }

    ngOnDestroy(): void {
    }

    onRefresh(): void {
        this.store.dispatch(FavoritesStoreActions.refresh());
    }

    onRemove(id: number | string): void {
        this.dialog.open(
            ConfirmDialogComponent,
            {
                width: '400px',
                data: {
                    message: 'Are you sure you want to remove the item from your favorites?',
                    cancelBtnText: 'Cancel',
                    confirmBtnText: 'Apply',
                },
            },
        ).afterClosed().pipe(
            filter(res => !!res),
        ).subscribe(() => {
            this.store.dispatch(FavoritesStoreActions.removeFromFavoriteRequest({ id }));
        });
    }

    onEdit(item: FavoriteItemModel): void {
        this.dialog.open(
            EditFavoriteDialogComponent,
            {
                data: item,
                width: '400px',
            },
        ).afterClosed().pipe(
            filter(data => !!data),
        ).subscribe(
            editedItem => {
                this.store.dispatch(FavoritesStoreActions.editFavoriteItemRequest({ item: editedItem }));
            },
        );
    }
}
