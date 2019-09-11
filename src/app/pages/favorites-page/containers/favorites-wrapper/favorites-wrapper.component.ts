import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FavoritesStoreActions, FavoritesStoreSelectors, RootStoreState } from '../../../../root-store';
import { providerSelector } from '../../../../root-store/filters-store/selectors';
import { ProviderEnum } from '../../../../shared/enums/provider-enum';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ProviderResultItem } from '../../../../core/providers/proviters.type';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { FavoriteItemModel } from '../../../../shared/models/favorite-item.model';

@Component({
  selector: 'app-favorites-wrapper',
  templateUrl: './favorites-wrapper.component.html',
  styleUrls: ['./favorites-wrapper.component.sass']
})
export class FavoritesWrapperComponent implements OnInit {
  favoriteItems$: Observable<FavoriteItemModel[]>;
  state$: Observable<ComponentState>;

  tableStructure: TableStructureModel[] = [];

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store.dispatch(FavoritesStoreActions.load());

    this.favoriteItems$ = this.store.select(FavoritesStoreSelectors.selectFavoriteItems);
    this.state$ = this.store.pipe(select(FavoritesStoreSelectors.selectFavoritesState));
  }

  onRefresh() {
    this.store.dispatch(FavoritesStoreActions.refresh());
  }

  onRemove(id: number) {
    this.store.dispatch(FavoritesStoreActions.removeFromFavoriteRequest({ id }));
  }

}
