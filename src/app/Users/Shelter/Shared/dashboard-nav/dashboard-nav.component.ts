import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [RouterModule],
  templateUrl: './dashboard-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dashboard-nav.component.css',
})
export class DashboardNavComponent {}
