import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  constructor(private socket: Socket) {
    // this.socket.emit("divisa");
    this.chekStatus();
  }
  chekStatus() {
    this.socket.on("connect", async () => {
    });
    this.socket.on("disconnect", async () => {
    });
  }
  emitir(evento: string, payload?: any, callback?: Function) {    
    this.socket.emit(evento, payload, callback);
  }

  escuchar(evento: string) {
    return this.socket.fromEvent(evento);
  }
}
