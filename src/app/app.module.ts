import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilaVirtualComponent } from './fila-virtual/fila-virtual.component';
import { ListadoComponent } from './listado/listado.component';
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import { environment } from 'src/environments/environment.development';

const config: SocketIoConfig = { url: environment.socketURL, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FilaVirtualComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
