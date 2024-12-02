import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone:false,
})
export class SearchBarComponent {
  searchText: string = '';

  onSearch() {
    console.log('Searching for:', this.searchText);
  }
}
