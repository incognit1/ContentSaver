import { createAction, props } from '@ngrx/store';
import { ProviderEnum } from '../../shared/enums/provider-enum';
import { SortInterface } from './state';

export const updateProvider = createAction(
    '[Filters] Provider Update',
    props<{ provider: ProviderEnum }>()
);

export const updateSearchTerm = createAction(
    '[Filters] Search Term Update',
    props<{ searchTerm: string }>()
);

export const updateSort = createAction(
    '[Filters] Update Sort',
    props<{ sort: SortInterface }>()
);
