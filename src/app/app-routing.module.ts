import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurante-list',
    pathMatch: 'full'
  },
  {
    path: 'restaurante-list',
    loadChildren: () => import('./pages/restaurante-list/restaurante-list.module').then( m => m.RestauranteListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
