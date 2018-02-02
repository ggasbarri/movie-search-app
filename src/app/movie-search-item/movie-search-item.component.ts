import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../Movie";

@Component({
  selector: "app-movie-search-item",
  templateUrl: "./movie-search-item.component.html",
  styleUrls: ["./movie-search-item.component.css"]
})
export class MovieSearchItemComponent implements OnInit {
  @Input() movie: Movie = {};
  @Input() index: number;
  constructor() {}

  ngOnInit() {}

  backdropStyle = () => {
    console.log(this.movie.backdropUrl);
    return {
      background: `linear-gradient(180deg, rgba(0,0,0,.7), transparent), url(${
        this.movie.backdropUrl
      })`,
      "background-size": "cover"
    };
  };

  animationDelay = () => ({
    "animation-delay": `${this.index * 0.15}s`
  });
}
