import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../../../../shared/models/joke';
import { select, Store } from '@ngrx/store';
import { JokeStoreActions, JokeStoreSelectors, RootStoreState } from '../../../../root-store';

@Component({
  selector: 'app-result-wrapper',
  templateUrl: './result-wrapper.component.html',
  styleUrls: ['./result-wrapper.component.sass']
})
export class ResultWrapperComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.jokes$ = this.store.pipe(
        select(JokeStoreSelectors.selectAllJokeItems)
    );

    this.error$ = this.store.pipe(select(JokeStoreSelectors.selectJokeError));

    this.isLoading$ = this.store.pipe(
        select(JokeStoreSelectors.selectJokeIsLoading)
    );
  }

  onRefresh() {
    this.store.dispatch(JokeStoreActions.refresh());
  }

  onSelect(id: number) {
    this.store.dispatch(JokeStoreActions.select({ id }));
  }

}
