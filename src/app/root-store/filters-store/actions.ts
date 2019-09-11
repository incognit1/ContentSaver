import { createAction, props } from '@ngrx/store';
import { ProviderEnum } from '../../shared/enums/provider-enum';

export const updateProvider = createAction(
  '[Filters] Provider Update',
  props<{ provider: ProviderEnum }>()
);

export const updateSearchTerm = createAction(
  '[Filters] Search Term Update',
  props<{ searchTerm: string }>()
);
