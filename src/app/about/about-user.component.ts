import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  styleUrls: ['./about-user.component.css'],
  templateUrl: './about-user.component.html'
})
export class AboutUserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.forEach((data: { user: User }) => this.user = data.user);
  }

  goBack() {
    this.router.navigate(['/about']);
  }

}