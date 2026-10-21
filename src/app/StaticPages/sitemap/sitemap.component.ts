import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sitemap',
  imports: [RouterModule],
  templateUrl: './sitemap.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sitemap.component.css',
})
export class SitemapComponent {}
