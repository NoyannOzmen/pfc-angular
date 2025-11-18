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
  animalSpeciesList : Array<Number> = [];
  speciesList: EspeceInfos[] = [];
  searchService: SearchService = inject(SearchService);

  isHidden : boolean = true;

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

  addtoSpeciesList(event : any, id : string) {
    if(event.target.checked) {
      this.animalSpeciesList.push(Number(id))
    } else {
      this.animalSpeciesList = this.animalSpeciesList.filter((element) => element !== Number(id))
    }
  }

  filterResultsFull(name : string, dptFull: string ) {
    this.filteredShelterList = this.shelterList;

    if (!dptFull && !name && this.animalSpeciesList.length < 0) {
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

    if(this.animalSpeciesList.length > 0) {
      let speciesFilteringArray : Array<AssociationInfos> = [];

      this.filteredShelterList.forEach((shelter) => {
        this.animalSpeciesList.forEach((identification) => {
          const found = shelter.pensionnaires.find((animal) =>
            Number(animal.espece.id) === identification );
          if(found && !speciesFilteringArray.includes(shelter)) {
            speciesFilteringArray.push(shelter)
          }
          if(!found && speciesFilteringArray.includes(shelter)) {
            speciesFilteringArray = speciesFilteringArray.filter((a) => a !== shelter)
          }
        })
      })
      this.filteredShelterList = speciesFilteringArray;
    } else { this.filteredShelterList = this.filteredShelterList}
  }
}
