import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimalService } from '../../Animals/animal.service';
import { AnimalInfos } from '../../models/models';

@Component({
  selector: 'app-carousel',
  imports: [RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  animalList: AnimalInfos[] = [];
  animalService: AnimalService = inject(AnimalService);
  isScreenWideEnough = screen.width > 768 ? signal("carousel3-img place-self-center ") : signal("carousel-img ");
  isFitting = screen.width > 768 ? signal(true) : signal(false);

  constructor() {
    this.animalService
      .getAllAnimals()
      .then((animalList: AnimalInfos[]) => {
        this.animalList = animalList;
      });
  }
}
