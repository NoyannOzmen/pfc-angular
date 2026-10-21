import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resident-sub-nav',
  imports: [RouterModule],
  templateUrl: './resident-sub-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './resident-sub-nav.component.css',
})
export class ResidentSubNavComponent {}
