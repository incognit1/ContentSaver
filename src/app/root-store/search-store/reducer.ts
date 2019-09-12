import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { initialState, State } from './state';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { customSort } from '../../utils/functions';
import { ProviderResultItem } from '../../core/providers/providers-result.type';

const featureReducer = createReducer(
    initialState,
    on(featureActions.load, state => ({
        ...state,
        state    : ComponentState.Loading,
    })),
    on(featureActions.loadSuccess, (state, { items }) =>
        ({
            ...state,
            state    : items.length ? ComponentState.Success : ComponentState.Empty,
            items,
        }),
    ),
    on(featureActions.sort, (state, payload) => ({
        ...state,
        items: customSort(state.items, payload.sort),
    })),
    on(featureActions.addToFavoriteSuccess, (state, payload ) => ({
        ...state,
        items: updateFavoriteItem(state.items, payload.id, true),
    })),
    on(featureActions.removeFromFavoriteSuccess, (state, payload ) => ({
        ...state,
        items: updateFavoriteItem(state.items, payload.id, false),
    })),
    on(featureActions.loadFailure, (state, { error }) => ({
        ...state,
        state    : ComponentState.Error,
    })),
);

function updateFavoriteItem(items: ProviderResultItem[], id: string | number, isFavorite: boolean): ProviderResultItem[] {
    const objIndex = items.findIndex(obj => obj.id === id);
    const updatedItem = { ...items[objIndex], isFavorite };

    return [
        ...items.slice(0, objIndex),
        updatedItem,
        ...items.slice(objIndex + 1),
    ];
}

export function reducer(state: State | undefined, action: Action): any {
    return featureReducer(state, action);
}
