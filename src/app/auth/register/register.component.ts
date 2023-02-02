import { Component } from '@angular/core';
import { Register } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
  isLoading: boolean = false;
  passwordMatched: boolean = true;
  submit() {
    if (this.isLoading) return;
    this.isLoading = true;
    if (this.form.password != this.form.confirm) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => (this.isLoading = false));
  }
}
