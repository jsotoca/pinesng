import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSanitizerPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue: 'es'},
    {provide:LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
