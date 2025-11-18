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
  filteredAnimalList : AnimalInfos[] = [];
  animalTagList : Array<number> = []
  speciesList: EspeceInfos[] = [];
  tagList: TagInfos[] = [];
  searchService: SearchService = inject(SearchService);

  isHidden : boolean = true;
  toggleFilters() {
    this.isHidden = !this.isHidden
  };

  constructor() {
    this.animalService
      .getAllAnimals()
      .then((animalList: AnimalInfos[]) => {
        this.animalList = animalList;
        this.filteredAnimalList = animalList;
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

  filterResultsSmall(especeDropdownSmall: string) {
    if (!especeDropdownSmall) {
      this.filteredAnimalList = this.animalList;
      return;
    }
    this.filteredAnimalList = this.animalList.filter((animal) =>
      animal?.espece.nom.toLowerCase().includes(especeDropdownSmall.toLowerCase()),
    );
  }

  addtoTagList(event : any, id : string) {
    if(event.target.checked) {
      this.animalTagList.push(Number(id))
    } else {
      this.animalTagList = this.animalTagList.filter((tagId) => tagId !== Number(id))
    }
  }

  filterResultsFull(especeDropdownFull: string, sexe : string, minAge : number, maxAge : number, dptSelect : string) {
    if (!especeDropdownFull && !dptSelect && !minAge && !maxAge && !sexe && this.animalTagList.length < 0) {
      this.filteredAnimalList = this.animalList;
      return;
    }
    if(especeDropdownFull) {
      this.filteredAnimalList = this.filteredAnimalList.filter((animal) =>
        animal.espece.nom.toLowerCase().includes(especeDropdownFull.toLowerCase())
    )} else { this.filteredAnimalList = this.filteredAnimalList }

    if(sexe) {
      this.filteredAnimalList = this.filteredAnimalList.filter((animal) =>
        animal.sexe.toLowerCase() === sexe.toLowerCase()
    )} else { this.filteredAnimalList = this.filteredAnimalList }

    if(dptSelect) {
      this.filteredAnimalList = this.filteredAnimalList.filter((animal) =>
        animal.refuge.code_postal.startsWith(dptSelect)
    )} else { this.filteredAnimalList = this.filteredAnimalList }

    if(minAge) {
      this.filteredAnimalList = this.filteredAnimalList.filter((animal) =>
        animal.age > minAge
    )} else { this.filteredAnimalList = this.filteredAnimalList }

    if(maxAge) {
      this.filteredAnimalList = this.filteredAnimalList.filter((animal) =>
        animal.age < maxAge
    )} else { this.filteredAnimalList = this.filteredAnimalList }

    if(this.animalTagList.length > 0) {
      let tagFilteringArray : Array<AnimalInfos> = [];

      this.filteredAnimalList.forEach((animal) =>
        this.animalTagList.forEach((identification) => {
          const found = animal.tags.some(tag => Number(tag.id) === identification);
          if(!found && !tagFilteringArray.includes(animal)) {
            tagFilteringArray.push(animal)
          }
          if(found && tagFilteringArray.includes(animal)) {
             tagFilteringArray = tagFilteringArray.filter((a) => a !== animal)
            }
        })
      )
      this.filteredAnimalList = tagFilteringArray;
    } else { this.filteredAnimalList = this.filteredAnimalList}
  }
}
