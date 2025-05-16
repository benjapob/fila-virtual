import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { SocketService } from '../servicios/socket.service';

@Component({
  selector: 'app-fila-virtual',
  templateUrl: './fila-virtual.component.html',
  styleUrls: ['./fila-virtual.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Empieza fuera de la pantalla
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Entra suavemente
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 })) // Sale suavemente
      ])
    ]),
    trigger('listAnimation2', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Empieza fuera de la pantalla
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Entra suavemente
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 })) // Sale suavemente
      ])
    ])
  ]
})
export class FilaVirtualComponent {
  // Variables para almacenar los datos
  public pendientesArray:any [] = [];
  public enProcesoArray:any [] = [];
  constructor(private webSocket: SocketService) {
    // Incializa la conexión al socket
    this.webSocket
      .escuchar("actualizacionFila")
      .subscribe((socket: any) => {
        if ("pendientesArray" in socket) {
          const nuevosDatos = socket.pendientesArray
            .sort((a: { fecha_update: string | number | Date; }, b: { fecha_update: string | number | Date; }) => new Date(a.fecha_update).getTime() - new Date(b.fecha_update).getTime());
            this.pendientesArray = nuevosDatos;
        }
        if ("enProcesoArray" in socket) {
          const nuevosDatos = socket.enProcesoArray
            .sort((a: { updatedAt: string | number | Date; }, b: { updatedAt: string | number | Date; }) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());

            this.enProcesoArray = nuevosDatos;
        }
        // console.log(this.entregadoSala);
        // console.log(this.pickingProceso);
      });    
  }

  trackById(index: number, item: any): any {
    return item.id;
  }

}
