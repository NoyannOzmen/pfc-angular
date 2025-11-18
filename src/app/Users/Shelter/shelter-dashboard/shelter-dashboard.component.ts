import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AssociationInfos, UtilisateurInfos } from '../../../models/models';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { DashboardSubNavComponent } from "../Shared/dashboard-sub-nav/dashboard-sub-nav.component";
import { UserShelterService } from '../user-shelter.service';

@Component({
  selector: 'app-shelter-dashboard',
  imports: [RouterModule, ReactiveFormsModule,DashboardNavComponent, DashboardSubNavComponent],
  templateUrl: './shelter-dashboard.component.html',
  styleUrl: './shelter-dashboard.component.css'
})
export class ShelterDashboardComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();
  shelterService : UserShelterService = inject(UserShelterService);
  shelter : AssociationInfos | undefined;
  router : Router = inject(Router);

  constructor() {
    this.shelterService.getDashboardInfos(Number(this.user.refuge!.id)).then((shelter) => {
      this.ShelterProfileForm.patchValue({
        nom: shelter.nom,
        responsable: shelter.responsable,
        rue: shelter.rue,
        commune: shelter.commune,
        code_postal: shelter.code_postal,
        pays: shelter.pays,
        telephone: shelter.telephone,
        siret: shelter.siret,
        email: this.user.email,
        site: shelter.site,
        description: shelter.description,
      })
    })
  }

    ShelterProfileForm = new FormGroup({
      nom : new FormControl({value : this.user.refuge?.nom, disabled : true}, [Validators.minLength(3), Validators.required]),
      responsable : new FormControl({value : this.user.refuge?.responsable, disabled : true}, [Validators.minLength(3), Validators.required]),
      rue : new FormControl({value : this.user.refuge?.rue, disabled : true}, [Validators.minLength(3), Validators.required]),
      commune : new FormControl({value : this.user.refuge?.commune, disabled : true}, [Validators.minLength(3), Validators.required]),
      code_postal : new FormControl({value : this.user.refuge?.code_postal, disabled : true}, [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/), Validators.required]),
      pays : new FormControl({value : this.user.refuge?.pays, disabled : true}, [Validators.minLength(3), Validators.required]),
      telephone : new FormControl({value : this.user.refuge?.telephone, disabled : true}, [Validators.pattern(/^(0|\+33 )[1-9]([\-. ]?[0-9]{2} ){3}([\-. ]?[0-9]{2})|([0-9]{8})$/)]),
      siret : new FormControl({value : this.user.refuge?.siret, disabled : true}, [Validators.pattern(/^(\d{14}|((\d{3}[ ]\d{3}[ ]\d{3})|\d{9})[ ]\d{5})$/), Validators.required]),
      email : new FormControl({value : this.user.email, disabled : true}, [Validators.email, Validators.required]),
      site : new FormControl({value : this.user.refuge?.site, disabled : true}, Validators.minLength(3)),
      description : new FormControl({value : this.user.refuge?.description, disabled : true}, Validators.maxLength(256)),
      mot_de_passe : new FormControl({value : '', disabled : true}, [Validators.minLength(8), Validators.required]),
      confirmation: new FormControl({value : '', disabled : true}, [Validators.minLength(8), Validators.required])
  })

  updateShelterInfos() {
    const updateInfos = this.ShelterProfileForm.value;
    this.shelterService.updateShelterInfos(updateInfos);

    this.ShelterProfileForm.patchValue({
      nom: updateInfos.nom,
      responsable: updateInfos.responsable,
      rue: updateInfos.rue,
      commune: updateInfos.commune,
      code_postal: updateInfos.code_postal,
      pays: updateInfos.pays,
      telephone: updateInfos.telephone,
      siret: updateInfos.siret,
      email: updateInfos.email,
      site: updateInfos.site,
      description: updateInfos.description,
    })
  }

  isHidden : boolean = true;
  displayModal() {
    this.isHidden = !this.isHidden
  };

  allowEdit() {
    this.ShelterProfileForm.enable();
  };

  handleDeleteAccount() {
    this.shelterService.deleteShelterAccount();
    this.authService.logOut();
    this.router.navigateByUrl('/')
  }
}
