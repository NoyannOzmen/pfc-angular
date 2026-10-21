import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legalinfo',
  imports: [RouterLink],
  templateUrl: './legalinfo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './legalinfo.component.css',
})
export class LegalinfoComponent {}
