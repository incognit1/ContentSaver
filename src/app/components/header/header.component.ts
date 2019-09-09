import { Component, OnInit } from '@angular/core';
import { ProviderEnum } from '../../shared/enums/provider-enum';
import { ProviderFilterInterface } from '../../shared/interfaces/provider-filter.interface';
import { RoutesService } from '../../core/services/routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.sass' ]
})
export class HeaderComponent implements OnInit {

  readonly providers: ProviderFilterInterface[] = [
    { value: ProviderEnum.Wikipedia, title: 'Wikipedia' },
    { value: ProviderEnum.Spotify, title: 'Spotify' },
    { value: ProviderEnum.BestBuy, title: 'BestBuy' }
  ];

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
