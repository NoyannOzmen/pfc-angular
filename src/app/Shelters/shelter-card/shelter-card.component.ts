import { Component, input } from '@angular/core';
import { AssociationInfos } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shelter-card',
  imports: [RouterModule],
  templateUrl: './shelter-card.component.html',
  styleUrl: './shelter-card.component.css'
})
export class ShelterCardComponent {
   shelter = input.required<AssociationInfos>();
}
