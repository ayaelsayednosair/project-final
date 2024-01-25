import { Component, inject } from '@angular/core';
import { Users } from '../interface/users';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  user!: Users[];
  userserv: UserService = inject(UserService);
  userform!: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.userform = this.FormBuilder.group({
      name: [''],
      email: [''],
      Subject: [''],
      Message: [''],
    });
    this.user = this.userserv.getalluser();
  }
  save() {
    // const user: Users = this.userform.value;
    // this.userserv.createuser(user);
    Swal.fire('thenk You ....', 'You submitted Successfully', 'success');
    console.log('fgdgfgfjhgj');
    this.userform.reset();
  }
}
