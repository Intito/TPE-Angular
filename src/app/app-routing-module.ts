import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueFacturas } from './boutique-facturas/boutique-facturas';
import { BoutiqueCSAbout } from './boutique-cs-about/boutique-cs-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'facturas',
    pathMatch: 'full'
  },
  {
    path: 'facturas',
    component: BoutiqueFacturas
  },
  {
    path: 'about',
    component: BoutiqueCSAbout
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
