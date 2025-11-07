import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    mot_de_passe: new FormControl('', [Validators.minLength(8), Validators.required]),
  })

  onSubmit() {
  //TODO: Use EventEmitter with form value
  console.warn(this.loginForm.value);
  }
}
