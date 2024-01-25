import { Injectable } from '@angular/core';
import { Coustomer } from '../interface/coustomer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoustomerService {
  constructor() {}

  getallcoust(): Coustomer[] {
    return this.Coustomers;
  }

  getcoustById(id: number): Coustomer | undefined {
    return this.Coustomers.find((cous) => cous.id === id);
  }

  Deletcoust(id: number) {
    const index = this.Coustomers.findIndex((cous) => cous.id === id);
    this.Coustomers.splice(index, 1);
    this.getCount();
  }
  nextid = 5;
  createcoust(cous: Coustomer) {
    cous.id = this.nextid++;
    this.Coustomers.push(cous);
    this.getCount();
  }

  updatecoust(cousid: number, updateduser: Coustomer) {
    const index = this.Coustomers.findIndex((cous) => cous.id === cousid);

    this.Coustomers[index] = { ...updateduser, id: cousid };
  }
  getCount() {
    return this.coustItemcount.next(this.Coustomers.length);
  }
  private Coustomers: Coustomer[] = [
    {
      id: 1,
      fristname: 'aya',
      lastname: 'elsayed',
      email: 'ayaelsayed@gmail.com',
      add: 'tanta',
      phone: '01204042183',
      qnt: 1,
    },
    {
      id: 2,
      fristname: 'ali',
      lastname: 'elsayed',
      email: 'ayaelsayed@gmail.com',
      add: 'tanta',
      phone: '01204042183',
      qnt: 2,
    },
    {
      id: 3,
      fristname: 'mona',
      lastname: 'elsayed',
      email: 'ayaelsayed@gmail.com',
      add: 'tanta',
      phone: '01204042183',
      qnt: 3,
    },
    {
      id: 4,
      fristname: 'ahmed',
      lastname: 'elsayed',
      email: 'ayaelsayed@gmail.com',
      add: 'tanta',
      phone: '01204042183',
      qnt: 4,
    },
  ];

  coustItemcount = new BehaviorSubject<number>(this.Coustomers.length);
  realcoustcount = this.coustItemcount.asObservable();
}
