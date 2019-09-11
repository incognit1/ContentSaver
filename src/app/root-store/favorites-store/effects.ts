import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import * as featureActions from './actions';
import { switchMap, withLatestFrom } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../index';
import { ProviderEnum } from '../../shared/enums/provider-enum';
import { ApiService } from '../../core/api/api.service';

@Injectable()
export class FavoritesStoreEffects {
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
      concatMap(() => {
          return this.dataService.getFavoritesItems().pipe(
            map(favorites => {
                return featureActions.loadSuccess({ favorites });
              }
            ),
            catchError(error => of(featureActions.loadFailure({ error })))
          );
        }
      )
    )
  );
  
  refreshEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.refresh),
      map(_ => featureActions.load())
    )
  );
  
  removeItemEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.removeFromFavoriteRequest),
      concatMap(({ id }) => this.dataService.deleteFavoriteItem(id)),
      map(_ => featureActions.load()),
    )
  );
}
