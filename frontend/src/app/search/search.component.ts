import { Component } from '@angular/core';

import { UserService } from '../shared/services/user.service';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'contact-page',
  template: `

<div class="container" >
  <button class="btn btn-danger" type="button" (click)="exit()" ><i class="glyphicon glyphicon-remove"></i></button>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{ 'SEARCH' | translate:param }}</h3>
    </div>
    <div class="panel-body">
      <div *ngFor="let message of messages[0]">
        <div class="alert alert-success alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>{{message.timestamp}}</strong> {{message.author}}: {{message.message}}
        </div>
        
      </div>            
    </div>
    <div class="panel-footer input-group">
      <input type="text" class="form-control" placeholder="{{ 'SearchPlaceHolder' | translate:param }}" [(ngModel)]="SearchBox" (keyup.enter)="find()">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" (click)="find()" ><i class="glyphicon glyphicon-send"></i></button>
      </span>
    </div>
  </div>
</div>
  

  `
})
export class SearchComponent {

    SearchBox: string = "";
    test: any = "";
    messages: Array<any> = [];
   constructor(private userService: UserService, private _dialog: MdDialog) {

   }

   exit(){
     this._dialog.closeAll();
   }

   find(){
     if(this.SearchBox){
       this.messages = [];
       console.log("finding message: " + this.SearchBox);
        this.messages.push(this.userService.getMessage(this.SearchBox));
        console.log(this.messages)
        this.SearchBox="";
     }
   }


}