import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Movie } from '../../core/models/movie.interface';
import { MovieService } from '../../core/services/movie/movie.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesResolver implements Resolve<Movie[]> {

  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Movie[] | Observable<Movie[]> | Promise<Movie[]> {
    return this.movieService.getAll()
  }

}
