import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { initialState, State } from './state';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';

const featureReducer = createReducer(
    initialState,
    on(featureActions.load, state => ({
        ...state,
        state    : ComponentState.Loading,
    })),
    on(featureActions.loadSuccess, (state, { jokes }) =>
        ({
            ...state,
            state    : jokes.length ? ComponentState.Success : ComponentState.Empty,
            jokes    : jokes,
        }),
    ),
    on(featureActions.loadFailure, (state, { error }) => ({
        ...state,
        state    : ComponentState.Error,
    })),
);

export function reducer(state: State | undefined, action: Action): any {
    return featureReducer(state, action);
}
