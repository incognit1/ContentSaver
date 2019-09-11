import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SortInterface, SortDirectionEnum, State } from './state';
import { ProviderEnum } from '../../shared/enums/provider-enum';

export const filtersState = createFeatureSelector<State>('filters');

export const providerSelector = createSelector(
  filtersState,
  (state: State): ProviderEnum => state.provider,
);

export const searchTermSelector = createSelector(
  filtersState,
  (state: State): string => state.searchTerm,
);

export const sortSelector = createSelector(
    filtersState,
    (state: State): SortInterface => state.sort,
);
