import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../../../root-store';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderEnum } from '../../../../shared/enums/provider-enum';
import { ProviderFilterInterface } from '../../../../shared/interfaces/provider-filter.interface';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: [ './search-filters.component.sass' ]
})
export class SearchFiltersComponent implements OnInit {
  @Input() set provider(value: ProviderEnum) {
    if (this.filterForm) {
      this.providerCtrl.setValue(value);
    }
    this._provider = value;
  }
  @Input() set searchTerm(value: string) {
    if (this.filterForm) {
      this.termCtrl.setValue(value);
    }
    this._term = value;
  }
  @Output() applyFilters = new EventEmitter();

  filterForm: FormGroup;

  readonly providers: ProviderFilterInterface[] = [
    { value: ProviderEnum.Wikipedia, title: 'Wikipedia' },
    { value: ProviderEnum.IMDB, title: 'IMDB' }
  ];
  private _provider: ProviderEnum;
  private _term: string;
  constructor(
    public store: Store<RootStoreState.State>,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.initFilterForm();
  }

  initFilterForm(): void {
    this.filterForm = this.fb.group({
      provider: [ this._provider, [ Validators.required ] ],
      term: [ this._term, [ Validators.required ] ]
    });
  }

  get providerCtrl(): AbstractControl {
    return this.filterForm.get('provider');
  }
  get termCtrl(): AbstractControl {
    return this.filterForm.get('term');
  }

  onFiltersApply(): void {
    this.applyFilters.emit(this.filterForm.value);
  }
}
