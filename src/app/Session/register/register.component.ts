import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
