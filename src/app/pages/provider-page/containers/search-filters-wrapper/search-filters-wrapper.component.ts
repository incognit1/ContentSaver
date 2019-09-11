import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { providerSelector, searchTermSelector } from '../../../../root-store/filters-store/selectors';
import { updateProvider, updateSearchTerm } from '../../../../root-store/filters-store/actions';
import { SearchStoreActions, RootStoreState } from '../../../../root-store';

@Component({
    selector   : 'app-search-filters-wrapper',
    templateUrl: './search-filters-wrapper.component.html',
    styleUrls  : [ './search-filters-wrapper.component.sass' ]
})
export class SearchFiltersWrapperComponent implements OnInit {
    provider$: Observable<any>;
    searchTerm$: Observable<any>;

    constructor(
        public store: Store<RootStoreState.State>,
    ) {
    }

    ngOnInit(): void {
        this.provider$   = this.store.select(providerSelector);
        this.searchTerm$ = this.store.select(searchTermSelector);
    }

    onFiltersApply({ term, provider }): void {
        this.store.dispatch(updateProvider({ provider }));
        this.store.dispatch(updateSearchTerm({ searchTerm: term }));
        this.store.dispatch(SearchStoreActions.refresh());
    }
}
