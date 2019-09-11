import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { FavoriteItemModel } from '../../../../shared/models/favorite-item.model';
import { providerTitles } from '../../../../shared/enums/provider-enum';
import { dbKeyId } from '../../../../shared/constants/symbols';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: [ './favorite-list.component.sass' ],
})
export class FavoriteListComponent implements OnInit {
  @Input() items: FavoriteItemModel[];
  @Input() loading: boolean;
  @Input() error: any;
  @Input() state: ComponentState;
  
  @Output() refresh = new EventEmitter();
  @Output() remove = new EventEmitter<number | string>();
  @Output() edit = new EventEmitter<FavoriteItemModel>();

  public readonly providerTitles = providerTitles;
  private readonly displayedColumns = [ 'provider', 'title', 'additional', 'comment', 'actions' ];
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  onRemove(element: FavoriteItemModel): void {
    this.remove.emit(element[dbKeyId]);
  }

  onEdit(element: FavoriteItemModel): void {
    this.edit.emit(element);
  }
}
