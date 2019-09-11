import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
    FavoritesStoreActions,
    FiltersStoreActions,
    SearchStoreActions,
    SearchStoreSelectors,
    RootStoreState
} from '../../../../root-store';
import { providerSelector, sortSelector } from '../../../../root-store/filters-store/selectors';
import { ProviderEnum } from '../../../../shared/enums/provider-enum';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ProviderResultItem } from '../../../../core/providers/providers-result.type';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { refresh } from '../../../../root-store/search-store/actions';
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

    tableStructure: TableStructureModel[] = [];

    constructor(private store: Store<RootStoreState.State>) {
    }

    ngOnInit(): void {
        this.store.select(providerSelector).pipe(
            untilDestroyed(this),
        ).subscribe(this.defineTableStructure);

        this.store.select(sortSelector).pipe(
            skip(1),
            untilDestroyed(this),
        ).subscribe(() => {
            this.store.dispatch(refresh());
        });

        this.store.select(selectFavoriteItems).pipe(
            filter(items => !items || !!(items && !items.length)),
            untilDestroyed(this),
            take(1),
        ).subscribe(() => this.store.dispatch(FavoritesStoreActions.load()));

        this.resultItems$ = this.store.select(SearchStoreSelectors.selectResultItems);
        this.state$       = this.store.pipe(select(SearchStoreSelectors.selectSearchState));
    }

    ngOnDestroy(): void {
    }

    defineTableStructure = (provider: ProviderEnum): void => {
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

    onRefresh(): void {
        this.store.dispatch(SearchStoreActions.refresh());
    }

    onAddToFavorite(item: ProviderResultItem): void {
        this.store.dispatch(SearchStoreActions.select({ item }));
    }

    onRemoveFromFavorite(item: ProviderResultItem): void {
        this.store.dispatch(SearchStoreActions.removeFromFavoriteRequest({ item }));
    }

    onSortChange(sort: SortInterface): void {
        this.store.dispatch(FiltersStoreActions.updateSort({ sort }));
    }

}
