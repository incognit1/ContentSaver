import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ProviderPageComponent } from './pages/provider-page/provider-page.component';


const routes: Routes = [
  {
    path     : '',
    redirectTo: 'provider',
    pathMatch: 'full',
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
  },
  {
    path: 'provider',
    component: ProviderPageComponent,
  },
  {
    path        : '404',
    loadChildren: () => import('./pages/errors-page/errors.module').then(m => m.ErrorsModule),
  },
  {
    path      : '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
