import { Component, OnInit } from '@angular/core';


import { ChatroomService } from '../shared/services/chatroom.service';
import { WebsocketService } from '../shared/services/websocket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  
  chatBox: string;
  messages: Array<any>;
  temp: Array<any>;


  constructor(private chatroomService: ChatroomService, private socket: WebsocketService) {
    this.chatBox= "";
    this.messages = [];
    this.temp = [];

    // chatroomService.getEventListener().subscribe(msg => {
    //   this.messages.push(msg)
    //   console.log("msg :" + msg.message)
    // });
   }
  
  ngOnInit() {
    this.chatroomService.getEventListener().subscribe(event => {
            if(event.type == "message") {
                this.messages.push(event.data);                
            }
            // if(event.type == "close") {
            //     this.messages.push("/The socket connection has been closed");
            // }
            // if(event.type == "open") {
            //     this.messages.push("/The socket connection has been established");
            // }
      });
  }

  send(){
    if(this.chatBox){
      console.log("sending: " + this.chatBox);
      // this.chatroomService.messages.next({"author":"test","message":this.chatBox,"timestamp": new Date().toString()});
      this.chatroomService.send(JSON.stringify({"author":"test","message":this.chatBox,"timestamp": new Date().toString()}));

      this.chatBox= "";
    }
  }

}
