import { Component, input } from '@angular/core';
import { DemandeInfos } from '../../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foster-request-table',
  imports: [RouterModule],
  templateUrl: './foster-request-table.component.html',
  styleUrl: './foster-request-table.component.css'
})
export class FosterRequestTableComponent {
  demande = input.required<DemandeInfos>();

  isHidden : boolean = true;
  toggle() {
    this.isHidden = !this.isHidden
  };
}
