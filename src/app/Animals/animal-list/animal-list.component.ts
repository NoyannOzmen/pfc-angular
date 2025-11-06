import { Component, inject } from '@angular/core';
import { AnimalService } from '../animal.service';
import { AnimalCardComponent } from '../animal-card/animal-card.component';
import { DptSelectComponent } from '../../Shared/dpt-select/dpt-select.component';
import { AnimalInfos, EspeceInfos, TagInfos } from '../../models/models';
import { SearchService } from '../../Shared/search.service';

@Component({
  selector: 'app-animal-list',
  imports: [AnimalCardComponent, DptSelectComponent],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animalList: AnimalInfos[] = [];
  animalService: AnimalService = inject(AnimalService);

  speciesList: EspeceInfos[] = [];
  tagList: TagInfos[] = [];
  searchService: SearchService = inject(SearchService);

  constructor() {
    this.animalService
      .getAllAnimals()
      .then((animalList: AnimalInfos[]) => {
        this.animalList = animalList;
      });

    this.searchService
      .getAllTags()
      .then((tagList: TagInfos[]) => {
        this.tagList = tagList;
      });

    this.searchService
      .getAllSpecies()
      .then((speciesList: EspeceInfos[]) => {
        this.speciesList = speciesList;
      });
  }
}
