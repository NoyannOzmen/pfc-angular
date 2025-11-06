import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-logged',
  imports: [RouterModule],
  templateUrl: './header-logged.component.html',
  styleUrl: './header-logged.component.css'
})
export class HeaderLoggedComponent {
  //TODO Remove Placeholder value
  isFoster : boolean = true;
  isShelter : boolean = false;
}
