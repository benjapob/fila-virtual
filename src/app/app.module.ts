import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilaVirtualComponent } from './fila-virtual/fila-virtual.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    FilaVirtualComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
