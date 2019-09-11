import { createAction, props } from '@ngrx/store';
import { ProviderResultItem } from '../../core/providers/providers-result.type';

export const load = createAction('[App Component] Load');

export const loadFailure = createAction(
  '[Search API] Load Failure',
  props<{ error: string }>(),
);

export const loadSuccess = createAction(
  '[Search API] Load Success',
  props<{ jokes: ProviderResultItem[] }>(),
);

export const refresh = createAction('[Provider Page] Refresh');

export const select = createAction(
  '[Favorites API] Add To Favorite Request',
  props<{ item: ProviderResultItem }>(),
);

export const addToFavoriteSuccess = createAction(
  '[Favorites API] Add To Favorite Success',
);

export const removeFromFavoriteRequest = createAction(
    '[Search Page] Remove Favorite Item Request',
    props<{ item: ProviderResultItem }>(),
);

export const removeFromFavoriteSuccess = createAction(
    '[Search API] Remove From Favorite Success',
);
