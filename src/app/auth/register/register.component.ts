import { Component } from '@angular/core';
import { Register } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService) {}

  submit() {
    this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
