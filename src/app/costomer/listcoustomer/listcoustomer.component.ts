import { Component, inject } from '@angular/core';
import { Coustomer } from 'src/app/interface/coustomer';
import { CoustomerService } from 'src/app/service/coustomer.service';

@Component({
  selector: 'app-listcoustomer',
  templateUrl: './listcoustomer.component.html',
  styleUrls: ['./listcoustomer.component.css'],
})
export class ListcoustomerComponent {
  Coustomers: Coustomer[] = [];
  cousserve: CoustomerService = inject(CoustomerService);

  constructor() {
    this.Coustomers = this.cousserve.getallcoust();
  }

  Deletcoust(id: number) {
    this.cousserve.Deletcoust(id);
  }
}
