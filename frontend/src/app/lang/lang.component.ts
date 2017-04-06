import { Component, OnInit } from '@angular/core';

import { LangService } from '../shared/services/lang.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  // constructor(private langService: LangService) {this.langService = langService }

  ngOnInit() {
    this.initData(); //create list
  }

initData(){
    // this.langService.langList=[
    //   {"codename":"fr","fullname":"Francais","icon":"http://yellowducky.co/flags/fr.gif"},
    //   {"codename":"en","fullname":"English","icon":"http://yellowducky.co/flags/us.gif"},
    // ]
}
}
