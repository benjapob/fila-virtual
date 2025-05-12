import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilaVirtualComponent } from './fila-virtual/fila-virtual.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListadoComponent } from './listado/listado.component';
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import { environment } from 'src/environments/environment.development';
import { TurnosComponent } from './turnos/turnos.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarTurnoComponent } from './turnos/componentes/modal-agregar-turno/modal-agregar-turno.component';
import { ReactiveFormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: environment.socketURL, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FilaVirtualComponent,
    ListadoComponent,
    TurnosComponent,
    ModalAgregarTurnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
