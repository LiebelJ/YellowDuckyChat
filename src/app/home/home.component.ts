import { Component } from '@angular/core';

// import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'home-page',
  template: `
    i am the home page
    <div>{{ 'HELLO' | translate:param }}</div>

    <h1>Login</h1>
  `
})
export class HomeComponent {
  // param = {value:''};
  // constructor(translate: TranslateService) {  

  // }

}