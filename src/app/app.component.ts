import { Component } from '@angular/core';

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
  message = 'This is the sample message.';
}
