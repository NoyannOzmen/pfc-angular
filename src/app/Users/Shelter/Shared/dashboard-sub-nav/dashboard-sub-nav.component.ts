import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-sub-nav',
  imports: [RouterModule],
  templateUrl: './dashboard-sub-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dashboard-sub-nav.component.css',
})
export class DashboardSubNavComponent {}
