import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class AboutUsersResolve implements Resolve<User[]> {

  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    return this.service.getUsers().then(users => users);
  }

}