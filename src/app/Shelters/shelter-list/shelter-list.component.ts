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

  speciesList: EspeceInfos[] = [];
  searchService: SearchService = inject(SearchService);

  constructor() {
    this.shelterService
      .getAllShelters()
      .then((shelterList: AssociationInfos[]) => {
        this.shelterList = shelterList;
      });

    this.searchService
      .getAllSpecies()
      .then((speciesList: EspeceInfos[]) => {
        this.speciesList = speciesList;
      });
  }
}
