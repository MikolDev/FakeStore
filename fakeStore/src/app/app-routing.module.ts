import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
