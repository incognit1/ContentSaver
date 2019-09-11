import { ComponentState } from './component-state.enum';

export class ComponentStateModel {
  constructor(private state: ComponentState) {
  }

  set(state: ComponentState) {
    this.state = state;
  }

  get(): ComponentState {
    return this.state;
  }
}
