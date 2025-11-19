import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavigationComponent } from '../header-navigation/header-navigation.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, HeaderNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#nav-links");
    hamburger?.classList.toggle("active");
    navMenu?.classList.toggle("active");
  }

  closeMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#nav-links");
    hamburger?.classList.remove("active");
    navMenu?.classList.remove("active");
  }
}
