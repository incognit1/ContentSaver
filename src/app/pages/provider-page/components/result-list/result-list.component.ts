import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableStructureModel } from '../../../../shared/interfaces/table-structure.interface';
import { ComponentState } from '../../../../shared/modules/component-state/component-state.enum';
import { ProviderResultItem } from '../../../../core/providers/providers-result.type';
import { SortDirectionEnum, SortInterface } from '../../../../root-store/filters-store/state';

@Component({
    selector   : 'app-result-list',
    templateUrl: './result-list.component.html',
    styleUrls  : [ './result-list.component.sass' ],
})
export class ResultListComponent implements OnInit {
    @Input() items: ProviderResultItem[];
    @Input() state: ComponentState;

    @Input() set tableStructure(value: TableStructureModel[]) {
        this.handleTableStructureChanges(value);
    }

    @Output() refresh            = new EventEmitter();
    @Output() addToFavorite      = new EventEmitter<ProviderResultItem>();
    @Output() removeFromFavorite = new EventEmitter<ProviderResultItem>();
    @Output() sortChanged        = new EventEmitter<SortInterface>();

    get tableStructure(): TableStructureModel[] {
        return this._tableStructure;
    }

    get displayedColumns(): string[] {
        return this._displayedColumns;
    }

    defaultSort = 'title';

    private _displayedColumns: string[];
    private _tableStructure: TableStructureModel[];

    constructor() {
    }

    ngOnInit(): void {
    }

    onAddToFavorite(item: ProviderResultItem): void {
        this.addToFavorite.emit(item);
    }

    onRemoveFromFavorite(item: ProviderResultItem): void {
        this.removeFromFavorite.emit(item);
    }

    onSortChange(event: { active: string, direction: SortDirectionEnum }): void {
        this.sortChanged.emit({
            sortBy   : event.direction ? event.active : this.defaultSort,
            direction: event.direction || SortDirectionEnum.ASC,
        } as SortInterface);
    }

    handleTableStructureChanges(value: TableStructureModel[]): void {
        this._displayedColumns = value.reduceRight((acc, innerValue) => {
            return [ innerValue.name, ...acc ];
        }, [ 'favorite' ]);
        this._tableStructure   = value;
    }
}
