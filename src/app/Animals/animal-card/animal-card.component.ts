import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { AnimalInfos } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  imports: [RouterModule],
  templateUrl: './animal-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './animal-card.component.css',
})
export class AnimalCardComponent {
  animal = input.required<AnimalInfos>();
}
