import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilaVirtualComponent } from './fila-virtual/fila-virtual.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [
  { path: 'fila-virtual', component: FilaVirtualComponent },
  { path: 'turnos', component: TurnosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
