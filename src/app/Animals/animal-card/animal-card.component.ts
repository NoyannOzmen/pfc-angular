import { Component, input } from '@angular/core';
import { AnimalInfos } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  imports: [RouterModule],
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.css'
})
export class AnimalCardComponent {
 animal = input.required<AnimalInfos>();
}
