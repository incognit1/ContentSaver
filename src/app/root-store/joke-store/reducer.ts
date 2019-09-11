import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { initialState, State, wikiAdapter } from './state';
import { ComponentStateModel } from '../../shared/modules/component-state/component-state.model';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';

const featureReducer = createReducer(
  initialState,
  on(featureActions.load, state => ({
    ...state,
    isLoading: true,
    error: null,
    state: ComponentState.Loading,
  })),
  on(featureActions.loadSuccess, (state, { jokes }) =>
    ({
      ...state,
      isLoading: false,
      error: null,
      state: ComponentState.Success,
      jokes: wikiAdapter(jokes),
    })
  ),
  on(featureActions.loadFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    state: ComponentState.Error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
