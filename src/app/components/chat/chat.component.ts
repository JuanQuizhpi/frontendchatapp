import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  //Creamos al usuario
  public usuario: string= '';
  //Para incio de sesión
  //inputValue: string = ''; // inicializa el valor del input
  inputBlocked: boolean = false; // inicializa el estado de bloqueo del input
  //Para los mensajes
  public message: string = '';
  public messages:any = [];

  ngOnInit(): void {
    this.listMessages();
  }

  constructor(private chatService: ChatService){

  }

  public sendMessage(){
    //Pone en el otro usuario
    this.chatService.sendMessage(this.usuario+' : '+this.message);
    //pone en el que envia
    this.messages.push(this.usuario+' : '+this.message)
    this.message='';
  }

  public listMessages(){
    this.chatService.listMessages().subscribe((data : any)=>{
      console.log(data);
      this.messages.push(data.data);
    })
  }

  //Metodo para bloque input
  blockInput() {
    this.inputBlocked = !this.inputBlocked; // cambia el estado de bloqueo
  }

}
