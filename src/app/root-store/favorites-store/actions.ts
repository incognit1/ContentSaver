import { createAction, props } from '@ngrx/store';
import { Joke } from '../../shared/models/joke';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';

export const load = createAction('[Favorites] Load');

export const loadFailure = createAction(
    '[Favorites] Load Failure',
    props<{ error: string }>(),
);

export const loadSuccess = createAction(
    '[Favorites] Load Success',
    props<{ favorites: FavoriteItemModel[] }>(),
);

export const refresh = createAction('[Jokes Page] Refresh');

export const select = createAction(
    '[Jokes Page] Select',
    props<{ id: number }>(),
);

export const removeFromFavoriteRequest = createAction(
    '[Favorites Page] Remove Favorite Item Request',
    props<{ id: number | string }>(),
);

export const removeFromFavoriteError = createAction(
    '[Favorites Page] Remove Favorite Item Error',
);

export const removeFromFavoriteSuccess = createAction(
    '[Favorites Page] Remove Favorite Item Success',
);

export const editFavoriteItemRequest = createAction(
    '[Favorites Page] Edit Favorite Item Request',
    props<{ item: FavoriteItemModel }>(),
);

export const editFavoriteItemError = createAction(
    '[Favorites Page] Edit Favorite Item Error',
);

export const editFavoriteItemSuccess = createAction(
    '[Favorites Page] Edit Favorite Item Success',
);
