import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { Movie } from 'src/app/core/models/movie.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { map, publish } from 'rxjs/operators';
import { Observable, ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css'],
})
export class MovieListPageComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.movies$ = this.route.data.pipe(
      map((data) => data.movies)
    )
  }

  ngOnInit() {}

  onMovieChange(movie: Movie) {
    (<ConnectableObservable<Movie>> this.movieService.update(movie.id, movie).pipe(
      publish()
    )).connect();
  }

  onClickMovieCover(movie: Movie) {
    this.router.navigate(['movie', 'detail', movie.id]);
  }

}
