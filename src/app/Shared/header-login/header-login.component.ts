import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-login',
  imports: [RouterModule],
  templateUrl: './header-login.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header-login.component.css',
})
export class HeaderLoginComponent {}
