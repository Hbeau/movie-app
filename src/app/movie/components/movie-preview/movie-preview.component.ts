import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css'],
})
export class MoviePreviewComponent implements OnInit {

  @Input()
  movie: Movie;

  @Output()
  movieChange = new EventEmitter();

  @Output()
  clickCover = new EventEmitter();

  updateState: boolean = false;

  constructor() {}

  ngOnInit(): void { }

  emitMovieChange() {
    this.movieChange.emit(this.movie);
  }

  emitClickCover() {
    this.clickCover.emit(this.movie);
  }

  switchState() {
    this.updateState = !this.updateState;
  }

  onClickUpdateButton() {
    this.switchState();
  }

  onClickOkButton() {
    this.switchState();
    this.emitMovieChange();
  }

  onClickCover() {
    this.emitClickCover();
  }

  getTitleClasses() {
    return {
      updating: this.updateState,
    }
  }

}
