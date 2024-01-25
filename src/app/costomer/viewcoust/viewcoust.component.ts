import { Coustomer } from 'src/app/interface/coustomer';

import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CoustomerService } from 'src/app/service/coustomer.service';

@Component({
  selector: 'app-viewcoust',
  templateUrl: './viewcoust.component.html',
  styleUrls: ['./viewcoust.component.css'],
})
export class ViewcoustComponent {
  Coustomers!: Coustomer | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  Coustserv = inject(CoustomerService);

  constructor() {
    const userID = Number(this.route.snapshot.params['id']);
    this.Coustomers = this.Coustserv.getcoustById(userID);
  }
}
