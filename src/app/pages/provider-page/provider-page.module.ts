import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderPageComponent } from './provider-page.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { ResultWrapperComponent } from './containers/result-wrapper/result-wrapper.component';
import { ResultItemWrapperComponent } from './containers/result-item-wrapper/result-item-wrapper.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [ ProviderPageComponent, ResultWrapperComponent, ResultItemWrapperComponent, ResultListComponent, ResultItemComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
      MaterialModule,
  ],
  exports: [ ProviderPageComponent ],
})
export class ProviderPageModule {
}
