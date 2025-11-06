import { Component } from '@angular/core';
import { HeaderLoggedComponent } from '../header-logged/header-logged.component';
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-header-navigation',
  imports: [HeaderLoggedComponent, HeaderLoginComponent],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.css'
})
export class HeaderNavigationComponent {
  //TODO Remove placeholder value
  isLogged : boolean = false;
}
