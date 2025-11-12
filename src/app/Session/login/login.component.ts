import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../auth.service';
import { UtilisateurInfos } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService : AuthService = inject(AuthService)
  user: UtilisateurInfos[] = []
  router : Router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    mot_de_passe: new FormControl('', [Validators.minLength(8), Validators.required]),
  })

  onSubmit() {
    const credentials = this.loginForm.value;
    this.authService.logIn(credentials)
    this.loginForm.reset();
    this.router.navigateByUrl('/')
  };
}
