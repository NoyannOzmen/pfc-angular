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

}
