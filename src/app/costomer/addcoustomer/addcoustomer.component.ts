import { CoustomerService } from 'src/app/service/coustomer.service';
import { Coustomer } from './../../interface/coustomer';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcoustomer',
  templateUrl: './addcoustomer.component.html',
  styleUrls: ['./addcoustomer.component.css'],
})
export class AddcoustomerComponent {
  Coustomers!: Coustomer[];
  coustserve: CoustomerService = inject(CoustomerService);

  coustomerform!: FormGroup;
  value: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.coustomerform = this.formBuilder.group({
      fristname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      add: ['', [Validators.required]],
      phone: ['', [Validators.required], Validators.maxLength(11)],
    });

    this.Coustomers = this.coustserve.getallcoust();
  }
  addcoust() {
    const user: Coustomer = this.coustomerform.value;
    this.coustserve.createcoust(user);
  }
  get fristname() {
    return this.coustomerform.get('fristname');
  }
  get lastname() {
    return this.coustomerform.get('lastname');
  }
  get email() {
    return this.coustomerform.get('email');
  }
  get add() {
    return this.coustomerform.get('add');
  }
  get phone() {
    return this.coustomerform.get('phone');
  }
}
