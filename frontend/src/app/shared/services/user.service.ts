import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import "rxjs/Rx";


@Injectable()
export class UserService {
  persons: Array<any> = [];

    constructor(private http: Http) { 
        
    }
  
  getChat(){
        console.log("fetching");
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
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let body = 'author='+data.author+'&message='+data.message+'&timestamp='+data.timestamp;

       console.log(data);

        return this.http.post("/api/chat/upload", body, { headers: headers })
        .subscribe(data=> {
            alert('ok');
        },
        error => {
            console.log("error");
        });       
    }

    currentUser: string = "User";
    setUser(username){
    this.currentUser = username;
    // this.users.push(this.currentUser);
  }
}

  