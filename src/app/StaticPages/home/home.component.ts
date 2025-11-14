import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../Shared/carousel/carousel.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
