import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, ConnectableObservable } from 'rxjs';
import { switchMap, publish } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  movie$: Observable<Movie>;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.movie$ = this.route.params.pipe(
      switchMap((params) => this.movieService.get(params.id))
    )
  }

  ngOnInit(): void { }

  onMovieChange(movie: Movie) {
    (<ConnectableObservable<Movie>> this.movieService.update(movie.id, movie).pipe(publish())).connect()
  }

}
