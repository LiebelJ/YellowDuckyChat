import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

import {MdDialog, MdDialogRef,MdSnackBar} from '@angular/material';
import { LangComponent } from './lang/lang.component';

@Component({
  selector: 'app-root',
  styles: [`
    .active   {
      color: #FFF !important;
    }
    .DuckyTitle {
      color: #ffd700;
      text-shadow: 0px 0px 20px #a98f03;
    }
  `],
  templateUrl: './app.component.html'
})
export class AppComponent {

  selectedLang: string;

  constructor(public dialog: MdDialog, private _snackbar: MdSnackBar) {}
  
  selectLang(){
    let dialoRef = this.dialog.open(LangComponent);
      dialoRef.afterClosed().subscribe(result => {
    this.selectedLang = result;
    this._snackbar.open('Ok!'+'', 'X'); 
    })
  }
}
