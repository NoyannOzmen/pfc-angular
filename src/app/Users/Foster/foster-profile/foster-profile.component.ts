import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { UtilisateurInfos } from '../../../models/models';
import { UserFosterService } from '../user-foster.service';

@Component({
  selector: 'app-foster-profile',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './foster-profile.component.html',
  styleUrl: './foster-profile.component.css'
})
export class FosterProfileComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();

  fosterService : UserFosterService = inject(UserFosterService);
  router : Router = inject(Router)

  FosterProfileForm = new FormGroup({
      prenom: new FormControl({value : this.user.accueillant?.prenom, disabled : true}, Validators.minLength(2)),
      nom : new FormControl({value : this.user.accueillant?.nom, disabled : true}, [Validators.minLength(3), Validators.required]),
      email : new FormControl({value : this.user.email, disabled : true}, [Validators.email, Validators.required]),
      telephone : new FormControl({value : this.user.accueillant?.telephone, disabled : true}, [Validators.pattern(/^(0|\+33 )[1-9]([\-. ]?[0-9]{2} ){3}([\-. ]?[0-9]{2})|([0-9]{8})$/)]),
      hebergement : new FormControl({value : this.user.accueillant?.hebergement, disabled : true}, Validators.minLength(3)),
      terrain : new FormControl({value : this.user.accueillant?.terrain, disabled : true}, Validators.minLength(3)),
      rue : new FormControl({value : this.user.accueillant?.rue, disabled : true}, [Validators.minLength(3), Validators.required]),
      commune : new FormControl({value : this.user.accueillant?.commune, disabled : true}, [Validators.minLength(3), Validators.required]),
      code_postal : new FormControl({value : this.user.accueillant?.code_postal, disabled : true}, [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/), Validators.required]),
      pays : new FormControl({value : this.user.accueillant?.pays, disabled : true}, [Validators.minLength(3), Validators.required]),
      mot_de_passe : new FormControl({value : '', disabled : true}, [Validators.minLength(8), Validators.required]),
      confirmation: new FormControl({value : '', disabled : true}, [Validators.minLength(8), Validators.required])
  })

  updateFosterInfos() {
    const updateInfos = this.FosterProfileForm.value;
    this.fosterService.updateFosterInfos(updateInfos);
    //TODO Update Form Infos as well
  }

  isHidden = true;
  displayModal() {
    this.isHidden = !this.isHidden
  };

  allowEdit() {
    this.FosterProfileForm.enable();
  };

  handleDeleteAccount() {
    this.fosterService.deleteFosterAccount();
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }
}
