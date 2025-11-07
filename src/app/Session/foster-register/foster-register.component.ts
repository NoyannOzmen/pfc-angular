import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-foster-register',
  imports: [ReactiveFormsModule],
  templateUrl: './foster-register.component.html',
  styleUrl: './foster-register.component.css'
})
export class FosterRegisterComponent {
  fosterRegisterForm = new FormGroup({
      prenom: new FormControl('', Validators.minLength(2)),
      nom : new FormControl('', [Validators.minLength(3), Validators.required]),
      email : new FormControl('', [Validators.email, Validators.required]),
      telephone : new FormControl('', [Validators.pattern(/^(0|\+33 )[1-9]([\-. ]?[0-9]{2} ){3}([\-. ]?[0-9]{2})|([0-9]{8})$/)]),
      hebergement : new FormControl('', Validators.minLength(3)),
      terrain : new FormControl('', Validators.minLength(3)),
      rue : new FormControl('', [Validators.minLength(3), Validators.required]),
      commune : new FormControl('', [Validators.minLength(3), Validators.required]),
      code_postal : new FormControl('', [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/), Validators.required]),
      pays : new FormControl('', [Validators.minLength(3), Validators.required]),
      mot_de_passe : new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmation: new FormControl('', [Validators.minLength(8), Validators.required])
  })

  onSubmit() {
  //TODO: Use EventEmitter with form value
  console.warn(this.fosterRegisterForm.value);
  }
}
