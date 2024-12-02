import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  stars: boolean[] = Array(5).fill(false);

  rate(index: number) {
    this.stars = this.stars.map((_, i) => i <= index);
  }

  reset() {
    this.stars = Array(5).fill(false);
  }
}
