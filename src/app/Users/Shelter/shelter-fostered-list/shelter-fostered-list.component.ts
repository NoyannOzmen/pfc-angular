import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { ResidentSubNavComponent } from "../Shared/resident-sub-nav/resident-sub-nav.component";
import { AuthService } from '../../../auth.service';
import { AnimalInfos, UtilisateurInfos } from '../../../models/models';
import { UserShelterService } from '../user-shelter.service';
import { ShelterFosteredTableComponent } from "../shelter-fostered-table/shelter-fostered-table.component";

@Component({
  selector: 'app-shelter-fostered-list',
  imports: [RouterModule, DashboardNavComponent, ResidentSubNavComponent, ShelterFosteredTableComponent],
  templateUrl: './shelter-fostered-list.component.html',
  styleUrl: './shelter-fostered-list.component.css'
})
export class ShelterFosteredListComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();
  shelterService: UserShelterService = inject(UserShelterService);
  fostered : AnimalInfos[] | undefined = [];

  constructor() {
    const shelterId = Number(this.user.refuge?.id)
    this.shelterService.getFostered(shelterId).then((fostered) => {
      this.fostered = fostered
    })
  }
}
