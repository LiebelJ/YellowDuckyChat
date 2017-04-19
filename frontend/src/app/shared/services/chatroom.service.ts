import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import "rxjs/Rx";

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

}
