import { SearchStoreState } from './search-store';
import { FiltersStoreState } from './filters-store';

export interface State {
  joke: SearchStoreState.State;
  filters: FiltersStoreState.State;
}
