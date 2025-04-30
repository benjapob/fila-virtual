import { Component } from '@angular/core';
import { TurnosService } from '../servicios/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent {
  public turnos: any[] = [];
  constructor (private turnosService: TurnosService) {
    this.turnosService.getTurnos().subscribe((data:any) => {
      if (data.ok) {
        this.turnos = data.turnos;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar los turnos'
        });
      }
    });
  }

  openModal() {
  }

}
