import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { AuthService } from '../../../auth.service';
import { AnimalInfos, DemandeInfos, UtilisateurInfos } from '../../../models/models';
import { AnimalService } from '../../../Animals/animal.service';
import { UserShelterService } from '../user-shelter.service';

@Component({
  selector: 'app-shelter-request-list',
  imports: [RouterModule, DashboardNavComponent],
  templateUrl: './shelter-request-list.component.html',
  styleUrl: './shelter-request-list.component.css'
})
export class ShelterRequestListComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();
  shelterService : UserShelterService = inject(UserShelterService);
  requested : AnimalInfos[] | undefined = [];
  animalService : AnimalService = inject(AnimalService);
  requestList : DemandeInfos[] = []

  isHidden = true;
  toggle() {
    this.isHidden = !this.isHidden
    //!TODO : Scope
  };

  constructor() {
    const shelterId = Number(this.user.refuge?.id)
    this.shelterService.getRequested(shelterId).then((requested) => {
      this.requested = requested
    })
  }

  //TODO : Apply to each animal
  findCurrentRequest(id : string) {
    this.shelterService.getAnimalRequests(Number(id)).then((requestList) => {
      this.requestList = requestList
    })
    return this.requestList
  }
}
