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

  borrarTurno(id:string) {
    Swal.fire({
      title: "Aviso",
      text: "Este cambio es irreversible, el turno se eliminará de la lista. ¿Deseas continuar?",
      showDenyButton: true,
      icon:'question',
      confirmButtonText: "Continuar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.turnosService.deleteTurno(id).subscribe((response: any) => {
          if (response.ok) {
            //Elimino el elemento del array
            this.turnos.splice(this.turnos.findIndex(turno => turno._id === id), 1);
            Swal.fire("Turno eliminado!", "", "success");
          }
        });
      }
    });
  }

  async editarTurno(id:string) {

  const { value: estado } = await Swal.fire({
  title: "Cambiar estado",
  input: "select",
  inputOptions: {
    espera: "En espera",
    atencion: "En atención",
    finalizado: "Finalizado",
  },
  inputPlaceholder: "Selecciona un estado",
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (!value) {
        resolve("El estado es obligatorio!");
      } else {
        resolve()
      }
    });
  }
  });

  if (estado) {
    this.turnosService.updateTurno(id, estado).subscribe((respuesta:any) => {
      if (respuesta.ok) {
        Swal.fire({title:'Estado actualizado', text:'El estado ha sido actualizado correctamente', icon:'success'});
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
    })
  }
  }

}
