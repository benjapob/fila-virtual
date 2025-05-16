import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private http: HttpClient) { }

  getTurnos() {
    return this.http.get('http://localhost:3003/turnos');
  }

  createTurno(turno: any) {
    return this.http.post('http://localhost:3003/turnos', turno);
  }
}
