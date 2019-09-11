import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { ProviderResultItem } from '../../core/providers/providers-result.type';

export interface State {
  items: ProviderResultItem[];
  state: ComponentState;
}

export const initialState: State = {
  items: [],
  state: ComponentState.Empty,
};
