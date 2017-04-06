import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  
  chatrooms=[];

  constructor() { }
  
  ngOnInit() {
    this.initChatrooms();
  }

  public initChatrooms(){
    this.chatrooms=[
      {"id":"1","name":"Chat 1","img":"http://www.yellowducky.co/YellowDuckySmall.png"},
      {"id":"2","name":"Chat 2","img":"http://www.yellowducky.co/YellowDuckySmall.png"},
      {"id":"3","name":"Chat 3","img":"http://www.yellowducky.co/YellowDuckySmall.png"}
    ];
  }

}
