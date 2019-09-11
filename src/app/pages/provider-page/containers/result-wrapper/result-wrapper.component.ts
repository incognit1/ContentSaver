import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { JokeStoreActions, JokeStoreSelectors, RootStoreState } from '../../../../root-store';
import { providerSelector } from '../../../../root-store/filters-store/selectors';
import { ProviderEnum } from '../../../../shared/enums/provider-enum';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ProviderResultItem } from '../../../../core/providers/proviters.type';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';

@Component({
  selector: 'app-result-wrapper',
  templateUrl: './result-wrapper.component.html',
  styleUrls: ['./result-wrapper.component.sass']
})
export class ResultWrapperComponent implements OnInit {
  resultItems$: Observable<ProviderResultItem[]>;
  state$: Observable<ComponentState>;

  tableStructure: TableStructureModel[] = [];

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store.select(providerSelector).subscribe(this.defineTableStructure);

    this.resultItems$ = this.store.select(JokeStoreSelectors.selectAllJokeItems);
    this.state$ = this.store.pipe(select(JokeStoreSelectors.selectSearchState));
  }

  defineTableStructure = (provider: ProviderEnum): void => {
    switch (provider) {
      case ProviderEnum.Wikipedia:
        this.tableStructure = [
          new TableStructureModel('index', 'id', 'ID'),
          new TableStructureModel('title', 'title', 'Title'),
          new TableStructureModel('extract', 'description', 'Description'),
        ];
        break;
      case ProviderEnum.IMDB:
        this.tableStructure = [
          new TableStructureModel('index', 'id', 'ID'),
          new TableStructureModel('title', 'title', 'Title'),
          new TableStructureModel('year', 'year', 'Year'),
          new TableStructureModel('type', 'type', 'Type'),
        ];
        break;
    }
  }
  onRefresh() {
    this.store.dispatch(JokeStoreActions.refresh());
  }

  onAddToFavorite(item: ProviderResultItem) {
    this.store.dispatch(JokeStoreActions.select({ item }));
  }

}
