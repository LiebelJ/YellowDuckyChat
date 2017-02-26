import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
  }

}
