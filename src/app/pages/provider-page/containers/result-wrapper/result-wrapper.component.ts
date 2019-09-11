import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
    FavoritesStoreActions,
    FiltersStoreActions,
    JokeStoreActions,
    JokeStoreSelectors,
    RootStoreState
} from '../../../../root-store';
import { providerSelector, sortSelector } from '../../../../root-store/filters-store/selectors';
import { ProviderEnum } from '../../../../shared/enums/provider-enum';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ProviderResultItem } from '../../../../core/providers/providers-result.type';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { refresh } from '../../../../root-store/search-store/actions';
import { SortInterface } from '../../../../root-store/filters-store/state';
import { skip } from 'rxjs/operators';

@Component({
    selector   : 'app-result-wrapper',
    templateUrl: './result-wrapper.component.html',
    styleUrls  : [ './result-wrapper.component.sass' ],
})
export class ResultWrapperComponent implements OnInit {
    resultItems$: Observable<ProviderResultItem[]>;
    state$: Observable<ComponentState>;

    tableStructure: TableStructureModel[] = [];

    constructor(private store: Store<RootStoreState.State>) {
    }

    ngOnInit(): void {
        this.store.dispatch(FavoritesStoreActions.load());

        this.store.select(providerSelector).subscribe(this.defineTableStructure);

        this.store.select(sortSelector).pipe(skip(1)).subscribe(() => {
            this.store.dispatch(refresh());
        });

        this.resultItems$ = this.store.select(JokeStoreSelectors.selectResultItems);
        this.state$       = this.store.pipe(select(JokeStoreSelectors.selectSearchState));
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
        this.store.dispatch(JokeStoreActions.refresh());
    }

    onAddToFavorite(item: ProviderResultItem): void {
        this.store.dispatch(JokeStoreActions.select({ item }));
    }

    onRemoveFromFavorite(item: ProviderResultItem): void {
        this.store.dispatch(JokeStoreActions.removeFromFavoriteRequest({ item }));
    }

    onSortChange(sort: SortInterface): void {
        this.store.dispatch(FiltersStoreActions.updateSort({ sort }));
    }

}
