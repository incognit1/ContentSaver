import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderPageComponent } from './provider-page.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { ResultWrapperComponent } from './containers/result-wrapper/result-wrapper.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { SearchFiltersWrapperComponent } from './containers/search-filters-wrapper/search-filters-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentStateModule } from '../../shared/modules/component-state/component-state.module';

const MATERIAL = [
    MatCardModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
];

@NgModule({
    declarations: [
        ProviderPageComponent,
        ResultWrapperComponent,
        ResultListComponent,
        SearchFiltersComponent,
        SearchFiltersWrapperComponent,
    ],
    imports     : [
        CommonModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
        ...MATERIAL,
        ComponentStateModule,
    ],
    exports     : [ ProviderPageComponent ],
})
export class ProviderPageModule {
}
