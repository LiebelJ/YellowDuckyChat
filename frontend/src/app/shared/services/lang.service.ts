import { Injectable } from '@angular/core';

@Injectable()
export class LangService {

  defaultLang = "en";
  langList=[
    {codename:"fr",fullname:"Francais",icon:"http://yellowducky.co/flags/fr.gif"},
    {codename:"en",fullname:"English",icon:"http://yellowducky.co/flags/us.gif"},
  ];
  activeLang=this.langList[0].codename;
}
