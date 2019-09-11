import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';
import { Joke } from '../../shared/models/joke';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';

export const selectJokeState = createFeatureSelector<State>('joke');

export const selectAllJokeItems = createSelector(
  selectJokeState,
  (state: State): any[] => state.jokes,
);

const selectSelectedJokeId = createSelector(
  selectJokeState,
  (state: State): number => state.selectedJokeId
);

export const selectCurrentJoke = createSelector(
  selectAllJokeItems,
  selectSelectedJokeId,
  (allJokes: Joke[], selectedJokeId: number) => {
    if (allJokes && selectedJokeId) {
      return allJokes.find(p => p.id === selectedJokeId);
    } else {
      return null;
    }
  }
);

export const selectJokeError = createSelector(
  selectJokeState,
  (state: State): any => state.error
);

export const selectSearchState = createSelector(
  selectJokeState,
  (state: State): ComponentState => state.state
);

export const selectJokeIsLoading = createSelector(
  selectJokeState,
  (state: State): boolean => state.isLoading
);
