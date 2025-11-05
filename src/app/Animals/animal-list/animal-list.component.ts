import { Component, inject } from '@angular/core';
import { AnimalService } from '../animal.service';
import { AnimalCardComponent } from '../animal-card/animal-card.component';
import { AnimalInfos } from '../../models/models';

@Component({
  selector: 'app-animal-list',
  imports: [AnimalCardComponent],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animalList: AnimalInfos[] = [];
  animalService: AnimalService = inject(AnimalService);

  constructor() {
    this.animalService
      .getAllAnimals()
      .then((animalList: AnimalInfos[]) => {
        this.animalList = animalList;
      });
  }
}
