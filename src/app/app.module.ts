import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Servicio español */
import { LOCALE_ID} from '@angular/core';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTableComponent } from './components/pipe-table/pipe-table.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PipeTableComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    DomSeguroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
