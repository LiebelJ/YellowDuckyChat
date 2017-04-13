import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import "rxjs/Rx";

// import { Person } from '../interfaces/person';

@Injectable()
export class PersonService {
  persons: Array<any> = [];

    constructor(private http: Http) { 
        
    }
  
  getPersons(){
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

    // addPerson(person:Person){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //     let body = 'name='+person.name+'&age='+person.age;
        
    //     return this.http.post("/api/person", body, { headers: headers })
    //     .subscribe(data=> {
    //         alert('ok');
    //     },
    //     error => {
    //         console.log("error");
    //     });       
    // }
}