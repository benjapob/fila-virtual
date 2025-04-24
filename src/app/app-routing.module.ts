import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilaVirtualComponent } from './fila-virtual/fila-virtual.component';

const routes: Routes = [
  { path: 'fila-virtual', component: FilaVirtualComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
