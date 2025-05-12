import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agregar-turno',
  templateUrl: './modal-agregar-turno.component.html',
  styleUrls: ['./modal-agregar-turno.component.scss']
})
export class ModalAgregarTurnoComponent {
  
  turnosForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
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
  }
}
