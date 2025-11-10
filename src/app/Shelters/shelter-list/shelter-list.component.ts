import { Component, inject } from '@angular/core';
import { ShelterService } from '../shelter.service';
import { ShelterCardComponent } from '../shelter-card/shelter-card.component';
import { DptSelectComponent } from '../../Shared/dpt-select/dpt-select.component';
import { AssociationInfos, EspeceInfos } from '../../models/models';
import { SearchService } from '../../Shared/search.service';

@Component({
  selector: 'app-shelter-list',
  imports: [ShelterCardComponent, DptSelectComponent],
  templateUrl: './shelter-list.component.html',
  styleUrl: './shelter-list.component.css'
})
export class ShelterListComponent {
  shelterList: AssociationInfos[] = [];
  shelterService: ShelterService = inject(ShelterService);
  filteredShelterList: AssociationInfos[] = [];

  speciesList: EspeceInfos[] = [];
  searchService: SearchService = inject(SearchService);

  isHidden = true;

  toggleFilters() {
    this.isHidden = !this.isHidden
  };

  constructor() {
    this.shelterService
      .getAllShelters()
      .then((shelterList: AssociationInfos[]) => {
        this.shelterList = shelterList;
        this.filteredShelterList = shelterList;
      });

    this.searchService
      .getAllSpecies()
      .then((speciesList: EspeceInfos[]) => {
        this.speciesList = speciesList;
      });
  }


  filterResultsSmall(dptSmall: string) {
    if (!dptSmall) {
      this.filteredShelterList = this.shelterList;
      return;
    }
    this.filteredShelterList = this.filteredShelterList.filter((shelter) =>
        shelter.code_postal.startsWith(dptSmall),
    )
  }

  filterResultsFull(name : string, dptFull: string, /* species : Array<string>, */ ) {
    if (!dptFull && !name /* && !species */) {
      this.filteredShelterList = this.shelterList;
      return;
    }
    if(dptFull) {
      this.filteredShelterList = this.filteredShelterList.filter((shelter) =>
        shelter.code_postal.startsWith(dptFull)
    )} else { this.filteredShelterList = this.filteredShelterList }

    if(name) {
      this.filteredShelterList = this.filteredShelterList.filter((shelter) =>
        shelter.nom.toLowerCase().includes(name.toLowerCase())
    )} else { this.filteredShelterList = this.filteredShelterList }

    /* if(species.length) {
      this.filteredShelterList = this.shelterList.filter((shelter) =>
        shelter.pensionnaires.espece.nom.includes(espece.nom)
    )} */
  }
}
