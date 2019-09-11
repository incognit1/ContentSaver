import { Joke } from '../../shared/models/joke';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { FavoriteItemModel } from '../../shared/models/favorite-item.model';

export const wikiAdapter = (wikiData: object) => {
  return Object.values(wikiData);
};

// export const featureAdapter: EntityAdapter<
//   Joke
//   > = createEntityAdapter<Joke>({
//   selectId: model => model.id,
//   sortComparer: (a: Joke, b: Joke): number =>
//     b.id.toString().localeCompare(a.id)
// });

export interface State {
  isLoading?: boolean;
  error?: any;
  favorites: FavoriteItemModel[];
  state: ComponentState;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  favorites: [],
  state: ComponentState.Empty
};
