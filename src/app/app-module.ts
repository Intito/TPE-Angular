import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FacturasList } from './facturas-list/facturas-list';

import { FormsModule } from '@angular/forms';
import { BoutiqueCSAbout } from './boutique-cs-about/boutique-cs-about';
import { BoutiqueFacturas } from './boutique-facturas/boutique-facturas';
import { Cart } from './cart/cart';

@NgModule({
  declarations: [
    App,
    FacturasList,
    BoutiqueCSAbout,
    BoutiqueFacturas,
    Cart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
