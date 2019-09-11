import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderPageComponent } from './provider-page.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { ResultWrapperComponent } from './containers/result-wrapper/result-wrapper.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { MaterialModule } from '../../shared/material.module';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { SearchFiltersWrapperComponent } from './containers/search-filters-wrapper/search-filters-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentStateModule } from '../../shared/modules/component-state/component-state.module';


@NgModule({
  declarations: [
    ProviderPageComponent,
    ResultWrapperComponent,
    ResultListComponent,
    SearchFiltersComponent,
    SearchFiltersWrapperComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentStateModule,
  ],
  exports: [ ProviderPageComponent ],
})
export class ProviderPageModule {
}
