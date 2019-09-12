import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  FavoritesStoreActions,
  FiltersStoreActions,
  RootStoreState,
  SearchStoreActions,
  SearchStoreSelectors
} from '../../../../root-store';
import { providerSelector, sortSelector } from '../../../../root-store/filters-store/selectors';
import { ProviderEnum } from '../../../../shared/enums/provider-enum';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ProviderResultItem } from '../../../../core/providers/providers-result.type';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { sort } from '../../../../root-store/search-store/actions';
import { SortInterface } from '../../../../root-store/filters-store/state';
import { filter, skip, take } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { selectFavoriteItems } from '../../../../root-store/favorites-store/selectors';

@Component({
    selector   : 'app-result-wrapper',
    templateUrl: './result-wrapper.component.html',
    styleUrls  : [ './result-wrapper.component.sass' ],
})
export class ResultWrapperComponent implements OnInit, OnDestroy {
    resultItems$: Observable<ProviderResultItem[]>;
    state$: Observable<ComponentState>;

    /**
     * This structure is necessary to form tables with various textual contents (based on the technical specifications - this is our case).
     * If there is a difference in views, this structure will not work.
     */
    tableStructure: TableStructureModel[] = [];

    constructor(private store: Store<RootStoreState.State>) {
    }

    ngOnInit(): void {
        this.syncStore();

        this.resultItems$ = this.store.select(SearchStoreSelectors.selectResultItems);
        this.state$       = this.store.pipe(select(SearchStoreSelectors.selectSearchState));
    }

    ngOnDestroy(): void {
    }

    onRefresh(): void {
        this.store.dispatch(SearchStoreActions.refresh());
    }

    onAddToFavorite(item: ProviderResultItem): void {
        this.store.dispatch(SearchStoreActions.addToFavoriteRequest({ item }));
    }

    onRemoveFromFavorite(item: ProviderResultItem): void {
        this.store.dispatch(SearchStoreActions.removeFromFavoriteRequest({ item }));
    }

    onSortChange(sort: SortInterface): void {
        this.store.dispatch(FiltersStoreActions.updateSort({ sort }));
    }

    private syncStore(): void {
        this.store.select(providerSelector).pipe(
            untilDestroyed(this),
        ).subscribe(this.defineTableStructure);

        this.store.select(sortSelector).pipe(
            skip(1),
            untilDestroyed(this),
        ).subscribe(sortData => this.store.dispatch(sort({ sort: sortData })));

        this.store.select(selectFavoriteItems).pipe(
            filter(items => !items || (!!items && !items.length)),
            untilDestroyed(this),
            take(1),
        ).subscribe(() => this.store.dispatch(FavoritesStoreActions.load()));
    }

    private defineTableStructure = (provider: ProviderEnum): void => {
        switch (provider) {
            case ProviderEnum.Wikipedia:
                this.tableStructure = [
                    new TableStructureModel('id', 'id', 'ID'),
                    new TableStructureModel('title', 'title', 'Title'),
                    new TableStructureModel('description', 'description', 'Description'),
                ];
                break;
            case ProviderEnum.IMDB:
                this.tableStructure = [
                    new TableStructureModel('id', 'id', 'ID'),
                    new TableStructureModel('title', 'title', 'Title'),
                    new TableStructureModel('year', 'year', 'Year'),
                    new TableStructureModel('type', 'type', 'Type'),
                ];
                break;

            default:
                break;
        }
    }
}
