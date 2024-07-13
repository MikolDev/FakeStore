import { Component, Input } from '@angular/core';

import { BarRating } from 'ngx-bar-rating';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss',
  standalone: true,
  imports: [ BarRating ]
})
export class RatingBarComponent {
  @Input() rating: number = 0;
}
