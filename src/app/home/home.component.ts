import { Component } from '@angular/core';

import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'home-page',
  template: `
    i am the home page
    <div>{{ 'HELLO' | translate:param }}</div>
  `
})
export class HomeComponent {
  param = {value:''};
  constructor(translate: TranslateService) {  
        translate.use('fr');
  }

}