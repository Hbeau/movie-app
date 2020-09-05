import { Injectable } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`/movies`);
  }

  get(id: number): Observable<Movie> {
    return this.http.get<Movie>(`/movies/${id}`);
  }

  add(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`/movies`, movie);
  }

  update(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`/movies/${id}`, movie);
  }

  delete(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`/movies/${id}`);
  }
}
