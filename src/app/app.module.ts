import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ProviderPageModule } from './pages/provider-page/provider-page.module';
import { FavoritesPageModule } from './pages/favorites-page/favorites-page.module';
import { SearchComponent } from './components/search/search.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProviderPageModule,
    FavoritesPageModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
