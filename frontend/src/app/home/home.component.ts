import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/services/user.service';

// import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent {
 public username: string;

constructor(private router: Router, private userService: UserService) { }

  connect(){
    if(this.username){
      console.log("> " + this.username);
      this.userService.setUser(this.username);
      this.router.navigateByUrl('/chatroom');
    }
  }
}