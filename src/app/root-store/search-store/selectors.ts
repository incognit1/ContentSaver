import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';
import { ComponentState } from '../../shared/modules/component-state/component-state.enum';
import { ProviderResultItem } from '../../core/providers/providers-result.type';

export const selectResultState = createFeatureSelector<State>('search');

export const selectResultItems = createSelector(
    selectResultState,
    (state: State): ProviderResultItem[] => state.jokes,
);

export const selectSearchState = createSelector(
    selectResultState,
    (state: State): ComponentState => state.state,
);
