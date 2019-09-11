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

@Injectable()
export class SearchStoreEffects {
    constructor(
        private dataService: ApiService,
        private actions$: Actions,
        private router: Router,
        private store: Store<RootStoreState.State>,
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
            ofType(featureActions.select),
            withLatestFrom(
                this.store.pipe(select(providerSelector)),
            ),
            concatMap(([ action, provider ]) => {
                return this.dataService.addFavoriteItem(FavoriteItemModel.init(action.item, provider));
            }),
            map(_ => featureActions.addToFavoriteSuccess()),
            map(() => favoritesAction.load()),
        ),
    );

    removeFromFavorite$ = createEffect(() =>
        this.actions$.pipe(
            ofType(featureActions.removeFromFavoriteRequest),
            withLatestFrom(
                this.store.pipe(select(selectFavoriteItems)),
            ),
            concatMap(([ action, favorites ]) => this.dataService.deleteFavoriteItem(
                this.getFavoriteId(favorites, action.item.id))),
            map(_ => featureActions.removeFromFavoriteSuccess()),
            map(() => favoritesAction.load()),
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
