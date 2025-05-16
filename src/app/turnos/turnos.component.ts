import { Component } from '@angular/core';
import { TurnosService } from '../servicios/turnos.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarTurnoComponent } from './componentes/modal-agregar-turno/modal-agregar-turno.component';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent {
  public turnos: any[] = [];
  constructor (private turnosService: TurnosService, private modal: NgbModal) {
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
    let modal = this.modal.open(ModalAgregarTurnoComponent, {
      size: 'xl'});

    modal.result.then((data) => {
      if (data.ok) {
        this.turnos.push(data.turno);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Turno agregado correctamente'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo agregar el turno'
        });
      }
    
    },
    (error) => {
    });
  }

}
