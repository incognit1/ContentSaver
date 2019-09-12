import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as featureActions from './actions';
import * as favoritesAction from './../favorites-store/actions';
import { withLatestFrom } from 'rxjs/internal/operators';
import { select, Store } from '@ngrx/store';
import { RootStoreState } from '../index';
import { providerSelector, searchTermSelector, sortSelector } from '../filters-store/selectors';
import { ProviderEnum } from '../../shared/enums/provider-enum';
import { ApiService } from '../../core/api/api.service';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';
import { selectFavoriteItems } from '../favorites-store/selectors';
import { ProviderResultItem } from '../../core/providers/providers-result.type';
import { dbKeyId } from '../../shared/constants/symbols';
import { customSort } from '../../utils/functions';
import { AlertService } from '../../core/services/alert.service';

@Injectable()
export class SearchStoreEffects {
    constructor(
        private dataService: ApiService,
        private actions$: Actions,
        private router: Router,
        private store: Store<RootStoreState.State>,
        private alert: AlertService,
    ) {
    }

    loadRequestEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.load),
            withLatestFrom(
                this.store.select(searchTermSelector),
                this.store.select(providerSelector),
                this.store.select(selectFavoriteItems),
                this.store.select(sortSelector),
            ),
            concatMap(([ action, term, provider, favorites, sort ]) => {
                    return this.defineProviderRequest(provider, term).pipe(
                        map(items => this.addFavoriteProperty(items, favorites)),
                        map(items => customSort(items, sort)),
                        map(items =>
                            featureActions.loadSuccess({
                                items,
                            }),
                        ),
                        catchError(error => of(featureActions.loadFailure({ error }))),
                    );
                },
            ),
        ),
    );

    refreshEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.refresh),
            map(_ => featureActions.load()),
        )
    );

    addToFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.addToFavoriteRequest),
            withLatestFrom(this.store.select(providerSelector)),
            concatMap(([ { item }, provider ]) => {
                return this.dataService.addFavoriteItem(FavoriteItemModel.init(item, provider)).pipe(
                    map(() => featureActions.addToFavoriteSuccess({ id: item.id })),
                    catchError(() => {
                        this.alert.showErrorMessage('Error adding from favorites');

                        return of(featureActions.addToFavoriteError({ id: item.id }));
                    }),
                );
            }),
        ),
    );

    removeFromFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.removeFromFavoriteRequest),
            withLatestFrom(
                this.store.pipe(select(selectFavoriteItems)),
            ),
            concatMap(([ { item }, favorites ]) =>
                this.dataService.deleteFavoriteItem(
                    this.getFavoriteId(favorites, item.id),
                ).pipe(
                    map(() => featureActions.removeFromFavoriteSuccess({ id: item.id })),
                    catchError(() => {
                        this.alert.showErrorMessage('Error deleting from favorites');

                        return of(featureActions.removeFromFavoriteError({ id: item.id }));
                    }),
                ),
            ),
        ),
    );

    refreshFavoritesEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.addToFavoriteSuccess, featureActions.removeFromFavoriteSuccess),
            map(_ => favoritesAction.load()),
        ),
    );

    private defineProviderRequest(provider: any, term: any): Observable<any> {
        switch (provider) {
            case ProviderEnum.Wikipedia:
                return this.dataService.wikipediaApi.search(term);

            case ProviderEnum.IMDB:
                return this.dataService.imdbApi.search(term);

            default:
                return of([]);
        }
    }

    private getFavoriteId(favorites: FavoriteItemModel[], itemId: string | number): string | number {
        return (favorites.find(favorite => favorite.itemId === itemId) || {}) [ dbKeyId ];
    }

    private addFavoriteProperty(items: ProviderResultItem[], favorites: FavoriteItemModel[]): any[] {
        return items.map(item => ({
            ...item,
            isFavorite: !!favorites.find(favoriteItem => favoriteItem.itemId === item.id),
        }));
    }
}
