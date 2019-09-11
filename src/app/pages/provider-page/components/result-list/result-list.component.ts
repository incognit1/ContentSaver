import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../../../../shared/models/joke';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { ProviderResultItem } from '../../../../core/providers/proviters.type';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: [ './result-list.component.sass' ]
})
export class ResultListComponent implements OnInit {
  @Input() items: ProviderResultItem[];
  @Input() state: ComponentState;
  @Input() set tableStructure(value: TableStructureModel[]) {
    this._displayedColumns = value.reduceRight((acc, innerValue) => {
      return [ innerValue.name, ...acc ];
    }, ['favorite']);
    this._tableStructure = value;
  }
  
  @Output() refresh = new EventEmitter();
  @Output() addToFavorite = new EventEmitter<ProviderResultItem>();
  
  get tableStructure(): TableStructureModel[] {
    return this._tableStructure;
  }
  private _displayedColumns: string[];
  private _tableStructure: TableStructureModel[];
  constructor() {
  }

  ngOnInit() {
  }

  onAddToFavorite(item: ProviderResultItem): void {
    this.addToFavorite.emit(item);
  }
}
