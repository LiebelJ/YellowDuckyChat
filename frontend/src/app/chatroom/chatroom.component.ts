import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';
import { ChatroomService } from '../shared/services/chatroom.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  
  chatBox: string;
  messages: Array<any>;

  constructor(private chatroomService: ChatroomService, private userService: UserService) {
    this.chatBox= "";
    this.messages = [];
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
      var data= {"author":this.userService.currentUser,"message":this.chatBox,"timestamp": new Date().toString()}
      this.chatroomService.send(JSON.stringify(data));
      this.userService.sendChat(JSON.stringify(data));
      this.chatBox= "";
    }
  }

}
