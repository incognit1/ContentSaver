import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { ProviderPageModule } from './pages/provider-page/provider-page.module';
import { FavoritesPageModule } from './pages/favorites-page/favorites-page.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './root-store';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

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
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MATERIAL_MODULES,
        ProviderPageModule,
        FavoritesPageModule,
        HttpClientModule,
        HttpClientJsonpModule,
        RootStoreModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        NotifierModule.withConfig({
        position : {
          horizontal: {
            position: 'right',
            distance: 12,
          },
          vertical  : {
            position: 'top',
            distance: 72,
            gap     : 10,
          },
        },
        behaviour: {
          autoHide: 3000,
        },
      }),
    ],
    providers   : [
        AngularFirestore,
    ],
    bootstrap   : [ AppComponent ],
})
export class AppModule {
}
