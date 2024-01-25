import { Injectable } from '@angular/core';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getalluser(): Users[] {
    return this.user;
  }

  nextid = 5;
  createuser(use: Users) {
    use.id = this.nextid++;
    this.user.push(use);
  }

  private user: Users[] = [
    {
      id: 1,
      name: 'aya',
      email: 'ayaelsayed@gmail.com',
      Subject: '',
      Message: 'thank you',
    },

    {
      id: 2,
      name: 'aya',
      email: 'ayaelsayed@gmail.com',
      Subject: '',
      Message: 'thank you',
    },

    {
      id: 3,
      name: 'aya',
      email: 'ayaelsayed@gmail.com',
      Subject: '',
      Message: 'thank you',
    },

    {
      id: 4,
      name: 'aya',
      email: 'ayaelsayed@gmail.com',
      Subject: '',
      Message: 'thank you',
    },
  ];
}
