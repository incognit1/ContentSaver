import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as featureActions from './actions';
import { ApiService } from '../../core/api/api.service';
import { AlertService } from '../../core/services/alert.service';

@Injectable()
export class FavoritesStoreEffects {
    constructor(
        private dataService: ApiService,
        private actions$: Actions,
        private alert: AlertService,
    ) {
    }

    loadRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.load),
            concatMap(() =>
                this.dataService.getFavoritesItems().pipe(
                    map(favorites => featureActions.loadSuccess({ favorites })),
                    catchError(error => of(featureActions.loadFailure({ error }))),
                ),
            ),
        ),
    );

    refreshEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.refresh, featureActions.removeFromFavoriteSuccess, featureActions.editFavoriteItemSuccess),
            map(() => featureActions.load()),
        ),
    );

    removeItemEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.removeFromFavoriteRequest),
            concatMap(({ id }) =>
                this.dataService.deleteFavoriteItem(id).pipe(
                    map(() => featureActions.removeFromFavoriteSuccess()),
                    catchError(() => {
                        this.alert.showErrorMessage('Error deleting favorite item');

                        return of(featureActions.removeFromFavoriteError());
                    }),
                ),
            ),
        ),
    );

    editItemEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.editFavoriteItemRequest),
            concatMap(({ item }) =>
                this.dataService.updateFavoriteItem(item).pipe(
                    map(() => {
                        this.alert.showSuccessMessage('Comment updated successfully');
                        return featureActions.editFavoriteItemSuccess();
                    }),
                    catchError(() => {
                        this.alert.showErrorMessage('Error editing comment');
                        return of(featureActions.editFavoriteItemError());
                    }),
                )),
        ),
    );
}
