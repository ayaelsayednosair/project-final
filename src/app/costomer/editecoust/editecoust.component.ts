import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Coustomer } from 'src/app/interface/coustomer';
import { CoustomerService } from 'src/app/service/coustomer.service';

@Component({
  selector: 'app-editecoust',
  templateUrl: './editecoust.component.html',
  styleUrls: ['./editecoust.component.css'],
})
export class EditecoustComponent implements OnInit {
  updatecoustform!: FormGroup;
  cousid!: number;
  constructor(
    private formbuilder: FormBuilder,
    private costserv: CoustomerService,
    private route: ActivatedRoute
  ) {
    this.updatecoustform = this.formbuilder.group({
      fristname: [''],
      lastname: [''],
      email: [''],
      add: [''],
      phone: [''],
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.cousid = +params['id'];
      this.loadempDetails();
    });
  }
  loadempDetails() {
    const useeee = this.costserv.getcoustById(this.cousid);

    if (useeee) {
      this.updatecoustform.patchValue(useeee);
    } else {
      // Redirect to the product list if the product is not found
    }
  }
  updatecoust() {
    if (this.updatecoustform.valid) {
      const updatecoustform: Coustomer = {
        id: this.cousid,
        ...this.updatecoustform.value,
      };

      this.costserv.updatecoust(this.cousid, updatecoustform);
    }
  }
}
