import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private http: HttpClient) { }

  getTurnos() {
    return this.http.get('http://localhost:3003/getTurnos');
  }

  createTurno(turno: any) {
    return this.http.post('http://localhost:3003/createTurno', turno);
  }

  deleteTurno(id: any) {
    return this.http.post('http://localhost:3003/deleteTurno', {id});
  }

  updateTurno(id: any, estado: string) {
    return this.http.post('http://localhost:3003/updateTurno', {id, estado});
  }
}
