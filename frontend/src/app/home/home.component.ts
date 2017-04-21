import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent {
 public username: string;

constructor(private router: Router) { }

  connect(){
    console.log("> " + this.username);
      this.router.navigateByUrl('/chatroom');
  }
}