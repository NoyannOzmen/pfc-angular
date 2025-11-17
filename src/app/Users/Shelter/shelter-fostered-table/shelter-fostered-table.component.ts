import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimalInfos } from '../../../models/models';

@Component({
  selector: 'app-shelter-fostered-table',
  imports: [RouterModule],
  templateUrl: './shelter-fostered-table.component.html',
  styleUrl: './shelter-fostered-table.component.css'
})
export class ShelterFosteredTableComponent  {
  animal = input.required<AnimalInfos>()

  isHidden : boolean = true;
  toggle() {
    this.isHidden = !this.isHidden
  };
}
