import { Component, OnInit } from '@angular/core';


import { ChatroomService } from '../shared/services/chatroom.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  
  chatrooms=[];
  chats=[];

  constructor(private chatroomService: ChatroomService) { }
  
  ngOnInit() {
    this.initChatrooms();
    this.getPersons();
  }


  getPersons(){
    this.chats = this.chatroomService.getPersons();
  }


  public initChatrooms(){
    this.chatrooms=[
      {"id":"1","name":"Chat 1","img":"http://dev.yellowducky.co/YellowDuckySmall.png"},
      {"id":"2","name":"Chat 2","img":"http://dev.yellowducky.co/YellowDuckySmall.png"},
      {"id":"3","name":"Chat 3","img":"http://dev.yellowducky.co/YellowDuckySmall.png"}
    ];
  }

}
