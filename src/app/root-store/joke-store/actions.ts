import { createAction, props } from '@ngrx/store';
import { Joke } from '../../shared/models/joke';
import { ProviderResultItem } from '../../core/providers/proviters.type';

export const load = createAction('[App Component] Load');

export const loadFailure = createAction(
  '[Jokes API] Load Failure',
  props<{ error: string }>()
);

export const loadSuccess = createAction(
  '[Jokes API] Load Success',
  props<{ jokes: Joke[] }>()
);

export const refresh = createAction('[Jokes Page] Refresh');

export const select = createAction(
  '[Jokes Page] Add To Favorite Request',
  props<{ item: ProviderResultItem }>()
);

export const addToFavoriteSuccess = createAction(
  '[Jokes Page] Add To Favorite Success',
);
