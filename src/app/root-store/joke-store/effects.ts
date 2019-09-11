import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import * as featureActions from './actions';
import { WikipediaApiService } from '../../core/providers/wikipedia/wikipedia-api.service';
import { withLatestFrom } from 'rxjs/internal/operators';
import { select, Store } from '@ngrx/store';
import { RootStoreState } from '../index';
import { providerSelector, searchTermSelector } from '../filters-store/selectors';
import { ProviderEnum } from '../../shared/enums/provider-enum';
import { ApiService } from '../../core/api/api.service';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';

@Injectable()
export class JokeStoreEffects {
  constructor(
    private dataService: ApiService,
    private actions$: Actions,
    private router: Router,
    private store: Store<RootStoreState.State>
  ) {
  }
  
  loadRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.load),
      withLatestFrom(
        this.store.pipe(select(searchTermSelector)),
        this.store.pipe(select(providerSelector))
      ),
      concatMap(([ action, term, provider ]) => {
          return this.defineProviderRequest(provider, term).pipe(
            map(jokes =>
              featureActions.loadSuccess({
                jokes
              })
            ),
            catchError(error => of(featureActions.loadFailure({ error })))
          );
        }
      )
    )
  );
  
  defineProviderRequest(provider: any, term: any): Observable<any> {
    switch (provider) {
      case ProviderEnum.Wikipedia:
        return this.dataService.wikipediaApi.search(term);
      
      case ProviderEnum.IMDB:
        return this.dataService.imdbApi.search(term);
      
      default:
        return of([]);
    }
  }
  
  refreshEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.refresh),
      map(_ => featureActions.load())
    )
  );
  
  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.select),
      withLatestFrom(
        this.store.pipe(select(providerSelector))
      ),
      concatMap(([action, provider]) => {
        return this.dataService.addFavoriteItem(FavoriteItemModel.init(action.item, provider));
      }),
      map(_ => featureActions.addToFavoriteSuccess())
    )
  );
}
