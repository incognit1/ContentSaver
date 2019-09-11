import { Joke } from '../../shared/models/joke';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { ProviderResultItem } from '../../core/providers/providers-result.type';

export const wikiAdapter = (wikiData: object) => {
  return Object.values(wikiData);
};

export interface State {
  isLoading?: boolean;
  error?: any;
  selectedJokeId: number;
  jokes: ProviderResultItem[];
  state: ComponentState;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  selectedJokeId: null,
  jokes: [],
  state: ComponentState.Empty,
};
