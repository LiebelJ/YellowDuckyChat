import { Injectable } from '@angular/core';

@Injectable()
export class LangService {

  defaultLang = "en";
  activeLang="";
  langList=[];
}
