import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

  public sendMessage(message: string){
    this.socket.emit('message',message);

  }

  public listMessages(){
    return this.socket.fromEvent('received').pipe(map((data=> data)));
  }
}
