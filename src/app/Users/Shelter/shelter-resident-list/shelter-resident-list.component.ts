import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from "../Shared/dashboard-nav/dashboard-nav.component";
import { ResidentSubNavComponent } from "../Shared/resident-sub-nav/resident-sub-nav.component";
import { AnimalInfos, EspeceInfos, UtilisateurInfos } from '../../../models/models';
import { SearchService } from '../../../Shared/search.service';
import { AuthService } from '../../../auth.service';
import { ShelterService } from '../../../Shelters/shelter.service';

@Component({
  selector: 'app-shelter-resident-list',
  imports: [RouterModule, DashboardNavComponent, ResidentSubNavComponent],
  templateUrl: './shelter-resident-list.component.html',
  styleUrl: './shelter-resident-list.component.css'
})
export class ShelterResidentListComponent {
  authService : AuthService = inject(AuthService);
  user : UtilisateurInfos = this.authService.getUserData();

  speciesList: EspeceInfos[] = [];
  searchService: SearchService = inject(SearchService);
  shelterService: ShelterService = inject(ShelterService);

  sheltered : AnimalInfos[] | undefined = [];
  filtered : AnimalInfos[] | undefined = [];

  isHidden : boolean = true
  displayDropdown() {
    this.isHidden = !this.isHidden
  }

  constructor() {
    this.searchService
      .getAllSpecies()
      .then((speciesList: EspeceInfos[]) => {
        this.speciesList = speciesList;
      });

    const shelterId = Number(this.user.refuge?.id)

    this.shelterService.getShelterById(shelterId).then((shelter) => {
      this.sheltered = shelter?.pensionnaires;
      this.filtered = shelter?.pensionnaires
    });
  }

  handleSearch(text : string) {
    if (!text) {
      this.filtered = this.sheltered;
      return;
    }
    this.filtered = this.sheltered?.filter((animal) =>
      animal.nom.toLowerCase().includes(text.toLowerCase()),
    );
  }

  //TODO Make multiple selection possible
  filterStatus(status : string) {
    if (!status) {
      this.filtered = this.sheltered;
      return;
    }
    this.filtered = this.sheltered?.filter((animal) =>
      animal.statut.toLowerCase().includes(status.toLowerCase()),
    );
  }

  //TODO Make multiple selection possible
  filterSpecies(espece : string) {
    if (!espece) {
      this.filtered = this.sheltered;
      return;
    }
    this.filtered = this.sheltered?.filter((animal) =>
      animal.espece.nom.toLowerCase().includes(espece.toLowerCase()),
    );
  }

  clearStatusFilter() {
    this.filtered = this.sheltered
  }
}
