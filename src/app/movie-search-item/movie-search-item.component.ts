import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-search-item',
  templateUrl: './movie-search-item.component.html',
  styleUrls: ['./movie-search-item.component.css'],
})
export class MovieSearchItemComponent implements OnInit {
  @Input() movie: Movie = {};
  constructor() {}

  ngOnInit() {}
}
