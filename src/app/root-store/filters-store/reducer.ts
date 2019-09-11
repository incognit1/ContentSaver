import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from './state';
import * as featureActions from './actions';

const featureReducer = createReducer(
    initialState,
    on(featureActions.updateProvider, (store, { provider }) => ({
        ...store,
        provider,
    })),
    on(featureActions.updateSort, (store, { sort }) => ({
        ...store,
        sort,
    })),
    on(featureActions.updateSearchTerm, (store, { searchTerm }) => ({
        ...store,
        searchTerm,
    })),
);

export function reducer(state: State | undefined, action: Action) {
    return featureReducer(state, action);
}
