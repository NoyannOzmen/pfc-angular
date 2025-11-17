import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { ResidentSubNavComponent } from "../Shared/resident-sub-nav/resident-sub-nav.component";
import { AuthService } from '../../../auth.service';
import { AnimalInfos, UtilisateurInfos } from '../../../models/models';
import { UserShelterService } from '../user-shelter.service';

@Component({
  selector: 'app-shelter-fostered-list',
  imports: [RouterModule, DashboardNavComponent, ResidentSubNavComponent],
  templateUrl: './shelter-fostered-list.component.html',
  styleUrl: './shelter-fostered-list.component.css'
})
export class ShelterFosteredListComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();
  shelterService: UserShelterService = inject(UserShelterService);
  fostered : AnimalInfos[] | undefined = [];
  isHidden = true;

  toggle() {
    this.isHidden = !this.isHidden
    //!TODO : Scope
  };

  constructor() {
    const shelterId = Number(this.user.refuge?.id)
    this.shelterService.getFostered(shelterId).then((fostered) => {
      this.fostered = fostered
    })

    //*
    //* //!TODO : Make it work here instead of template
    // this.shelterService.getShelterById(shelterId).then((shelter) => {
    //  /* this.fostered = shelter?.pensionnaires.filter((animal) => {
    //    animal.statut = "Accueilli"
    //  }) */
    //  this.fostered = shelter?.pensionnaires;
    // });
  }
}
