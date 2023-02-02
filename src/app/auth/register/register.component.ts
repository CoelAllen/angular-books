import { Component } from '@angular/core';
import { Register } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: Register = {
    email: '',
    password: '',
    confirm: '',
  };
  submit() {}
}
