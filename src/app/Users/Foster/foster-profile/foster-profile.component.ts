import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { FamilleInfos, UtilisateurInfos } from '../../../models/models';
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
  famille : FamilleInfos | undefined;
  router : Router = inject(Router)

  constructor() {
    this.fosterService.getProfileInfos(Number(this.user.accueillant!.id)).then((famille) => {
      this.FosterProfileForm.patchValue({
        prenom : famille.prenom,
        nom: famille.nom,
        email: this.user.email,
        telephone: famille.telephone,
        hebergement: famille.hebergement,
        terrain: famille.terrain,
        rue: famille.rue,
        commune: famille.commune,
        code_postal: famille.code_postal
      })
    })
  }

  FosterProfileForm = new FormGroup({
      prenom: new FormControl({value : '', disabled : true}, Validators.minLength(3)),
      nom : new FormControl({value : '', disabled : true}, [Validators.minLength(3), Validators.required]),
      email : new FormControl({value : '', disabled : true}, [Validators.email, Validators.required]),
      telephone : new FormControl({value : '', disabled : true}, [Validators.pattern(/^(0|\+33 )[1-9]([\-. ]?[0-9]{2} ){3}([\-. ]?[0-9]{2})|([0-9]{8})$/)]),
      hebergement : new FormControl({value : '', disabled : true}, Validators.minLength(3)),
      terrain : new FormControl({value : '', disabled : true}, Validators.minLength(3)),
      rue : new FormControl({value : '', disabled : true}, [Validators.minLength(3), Validators.required]),
      commune : new FormControl({value : '', disabled : true}, [Validators.minLength(3), Validators.required]),
      code_postal : new FormControl({value : '', disabled : true}, [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/), Validators.required]),
      pays : new FormControl({value : '', disabled : true}, [Validators.minLength(3), Validators.required]),
      mot_de_passe : new FormControl({value : '', disabled : true}, [Validators.minLength(8), Validators.required]),
      confirmation: new FormControl({value : '', disabled : true}, [Validators.minLength(8), Validators.required])
  })

  updateFosterInfos() {
    const updateInfos = this.FosterProfileForm.value;
    this.fosterService.updateFosterInfos(updateInfos);

    this.FosterProfileForm.patchValue({
      prenom : updateInfos.prenom,
      nom: updateInfos.nom,
      email: updateInfos.email,
      telephone: updateInfos.telephone,
      hebergement: updateInfos.hebergement,
      terrain: updateInfos.terrain,
      rue: updateInfos.rue,
      commune: updateInfos.commune,
      code_postal: updateInfos.code_postal
    })
  }

  isHidden : boolean = true;
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
