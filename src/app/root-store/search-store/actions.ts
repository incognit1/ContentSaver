import { createAction, props } from '@ngrx/store';
import { ProviderResultItem } from '../../core/providers/providers-result.type';
import { SortInterface } from '../filters-store/state';

export const load = createAction('[Search API] Load');

export const sort = createAction(
  '[App Component] Sort',
  props<{ sort: SortInterface }>(),
);

export const loadFailure = createAction(
  '[Search API] Load Failure',
  props<{ error: string }>(),
);

export const loadSuccess = createAction(
  '[Search API] Load Success',
  props<{ items: ProviderResultItem[] }>(),
);

export const refresh = createAction('[Provider Page] Refresh');

export const addToFavoriteRequest = createAction(
  '[Favorites API] Add To Favorite Request',
  props<{ item: ProviderResultItem }>(),
);

export const addToFavoriteSuccess = createAction(
    '[Favorites API] Add To Favorite Success',
    props<{ id: string | number }>(),
);

export const addToFavoriteError = createAction(
    '[Favorites API] Add To Favorite Error',
    props<{ id: string | number }>(),
);

export const removeFromFavoriteRequest = createAction(
    '[Search Page] Remove Favorite Item Request',
    props<{ item: ProviderResultItem }>(),
);

export const removeFromFavoriteSuccess = createAction(
    '[Search API] Remove From Favorite Success',
    props<{ id: string | number }>(),
);

export const removeFromFavoriteError = createAction(
    '[Favorites API] Remove From Favorite Error',
    props<{ id: string | number }>(),
);
