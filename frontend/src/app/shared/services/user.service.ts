import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import "rxjs/Rx";

@Injectable()
export class UserService {
  persons: Array<any> = [];
  messages: Array<any> = [];

    constructor(private http: Http) { 
        
    }

  getMessage(message){
    this.messages = [];
        this.http.get("/api/chat/getMessage?message="+message)
        .map( result => result.json())
        .flatMap(result => result)
        .subscribe(
            result => {
                this.messages.push((result));
            },
            error => {
                console.error(error);
            }
        );
     return this.messages;
  }

  getChat(){
        this.http.get("/api/chat/download")
        .map( result => result.json())
        .subscribe(
            result => {
                this.persons.push((result));
            },
            error => {
                console.error(error);
            }
        );
     return this.persons;
    }

    sendChat(data){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post("/api/chat/upload", data, { headers: headers })
        .subscribe(data=> {
        },
        error => {
            console.log("error");
        });       
    }

    currentUser: string = "User";
    setUser(username){
    this.currentUser = username;
  }
}

  