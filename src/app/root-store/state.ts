import { JokeStoreState } from './joke-store';
import { FiltersStoreState } from './filters-store';

export interface State {
  joke: JokeStoreState.State;
  filters: FiltersStoreState.State;
}
