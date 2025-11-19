import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-shelter-register',
  imports: [ReactiveFormsModule],
  templateUrl: './shelter-register.component.html',
  styleUrl: './shelter-register.component.css'
})
export class ShelterRegisterComponent {
  router : Router = inject(Router)
  registerService : RegisterService = inject(RegisterService);
  userMessage : string = '';

  shelterRegisterForm = new FormGroup({
      nom : new FormControl('', [Validators.minLength(3), Validators.required]),
      responsable : new FormControl('', [Validators.minLength(3), Validators.required]),
      rue : new FormControl('', [Validators.minLength(3), Validators.required]),
      commune : new FormControl('', [Validators.minLength(3), Validators.required]),
      code_postal : new FormControl('', [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/), Validators.required]),
      pays : new FormControl('', [Validators.minLength(3), Validators.required]),
      telephone : new FormControl('', [Validators.pattern(/^(0|\+33 )[1-9]([\-. ]?[0-9]{2} ){3}([\-. ]?[0-9]{2})|([0-9]{8})$/)]),
      siret : new FormControl('', [Validators.pattern(/^(\d{14}|((\d{3}[ ]\d{3}[ ]\d{3})|\d{9})[ ]\d{5})$/), Validators.required]),
      email : new FormControl('', [Validators.email, Validators.required]),
      site : new FormControl('', Validators.minLength(3)),
      description : new FormControl('', Validators.maxLength(256)),
      mot_de_passe : new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmation: new FormControl('', [Validators.minLength(8), Validators.required])
  })

  async onSubmit() {
    const registerInfos = this.shelterRegisterForm.value;
    const data = await this.registerService.registerShelter(registerInfos);
    if(data) {
      this.userMessage = data
    } else {
      this.shelterRegisterForm.reset();
      this.router.navigateByUrl('/')
    }
  }
}
