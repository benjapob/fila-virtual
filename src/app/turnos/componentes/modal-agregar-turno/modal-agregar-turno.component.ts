import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TurnosService } from 'src/app/servicios/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-agregar-turno',
  templateUrl: './modal-agregar-turno.component.html',
  styleUrls: ['./modal-agregar-turno.component.scss']
})
export class ModalAgregarTurnoComponent {
  
  turnosForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private turnosService: TurnosService) {
    this.turnosForm = this.fb.group({
      motivo: ['', Validators.required],
      prioridad: ['', Validators.required],
      consultorio: ['', Validators.required],
      medico: ['', Validators.required],
      paciente: ['', Validators.required],
      
    })
  }

  guardar() {
    // Lógica para guardar el turno
    if (this.turnosForm.valid) {
      const turno = this.turnosForm.value;
      this.turnosService.createTurno(turno).subscribe((response: any) => {        
        if (response.ok) {
          // Cerrar el modal
          this.activeModal.close({ok: true, turno: response.turno});
        } else {
          // Mostrar mensaje de error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo agregar el turno'
          });
        }
      });
    } else {
      // Mostrar mensaje de error
      for (const control in this.turnosForm.controls) {
        if (this.turnosForm.controls[control].invalid) {
          this.turnosForm.controls[control].markAsPending();
        }
      }

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor complete todos los campos obligatorios'
      });
    }
  }
}
