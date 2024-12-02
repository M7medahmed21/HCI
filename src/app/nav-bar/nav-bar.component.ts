import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  menuItems = [
    { id: '26', name: 'HOME', icon: 'image-26' },
    { id: '25', name: 'MEAL PLANNING', icon: 'image-25' },
    { id: '34', name: 'PRODUCTS', icon: 'image-34' },
    { id: '23', name: 'USER PROFILE', icon: 'image-23' },
  ];

  activeItem = this.menuItems[0];

  setActive(item: { id: string; name: string; icon: string }) {
    this.activeItem = item;
  }
}
