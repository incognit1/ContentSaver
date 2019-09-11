import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';

export const selectFavoriteState = createFeatureSelector<State>('favorite');

export const selectFavoriteItems = createSelector(
  selectFavoriteState,
  (state: State): FavoriteItemModel[] => state.favorites,
);

export const selectJokeError = createSelector(
  selectFavoriteState,
  (state: State): any => state.error
);

export const selectFavoritesState = createSelector(
  selectFavoriteState,
  (state: State): ComponentState => state.state
);

export const selectJokeIsLoading = createSelector(
  selectFavoriteState,
  (state: State): boolean => state.isLoading
);
