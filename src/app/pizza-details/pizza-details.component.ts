import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent {
  pizzaImage: string = 'https://dashboard.codeparrot.ai/api/assets/Z034kHFEV176CUmy';
  pizzaName: string = 'Delicious Pizza';
  pizzaPrice: string = '$9.99';
}
