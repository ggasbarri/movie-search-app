import { Component, OnInit } from '@angular/core';
import { data } from '../../assets/mock-data';
import { Movie } from '../Movie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchResults: Movie[] = data;
  search: string;
  constructor() {}

  ngOnInit() {}
}
