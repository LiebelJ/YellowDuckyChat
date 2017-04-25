import { Component, OnInit } from '@angular/core';

import { LangService } from '../shared/services/lang.service';
import {MdDialog, MdDialogRef} from '@angular/material';

import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  constructor(private langService: LangService, private _dialog: MdDialog, private translateService: TranslateService) {this.langService = langService }
  
  langList =[];
  ngOnInit() {
    this.langList = this.langService.langList;
  }
  selectLang(langCode: string){
    this.langService.activeLang = langCode;
    this.translateService.use(langCode);
    this._dialog.closeAll();
  }
}
