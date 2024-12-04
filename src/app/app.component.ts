import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./nav-bar/nav-bar.component";
import { FoodDetailsComponent } from './food-details/food-details.component';
import {NavigationBarComponentCopy} from'./nav-bar copy/nav-bar.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent,FoodDetailsComponent,NavigationBarComponentCopy],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HCI';
}
