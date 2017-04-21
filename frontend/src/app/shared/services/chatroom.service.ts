import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";


import "rxjs/Rx";

import { Chatroom } from '../interfaces/chatroom';

@Injectable()
export class ChatroomService {
persons: Array<any> = [];
  constructor(private http: Http) { }

  getPersons():Array<any>{
        console.log("fetching");
        this.http.get("/api/persons")
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

    connectToChat(chat:Chatroom){
        var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            let body = 'id='+chat.id+'&name='+chat.name;
            
            return this.http.post("/api/chatroom", body, { headers: headers })
            .subscribe(data=> {
                alert('Connecting');
            },
            error => {
                console.log("error");
            });   
    }
    
    addUserToChat(id:number, username:string){
        var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            let body = 'id='+id+'&username='+username;
            
            return this.http.post("/api/chatroom/addUser", body, { headers: headers })
            .subscribe(data=> {
                alert('Adding');
            },
            error => {
                console.log("error");
            });   
    }

}
