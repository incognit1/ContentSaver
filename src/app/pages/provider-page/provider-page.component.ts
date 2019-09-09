import { Component, OnInit } from '@angular/core';
import { WikipediaApiService } from '../../core/providers/wikipedia/wikipedia-api.service';
import { JokeStoreActions, JokeStoreSelectors } from '../../root-store/joke-store';
import { select } from '@ngrx/store';
import { RootStoreState } from '../../root-store';
import { Observable } from 'rxjs';
import { Joke } from '../../shared/models/joke';

@Component({
  selector: 'app-provider-page',
  templateUrl: './provider-page.component.html',
  styleUrls: ['./provider-page.component.sass']
})
export class ProviderPageComponent {
}
