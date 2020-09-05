import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MoviesResolver } from './resolvers/movies.resolver';

const routes: Routes = [
  { path: 'list', component: MovieListPageComponent, resolve: { movies: MoviesResolver } },
  { path: 'detail/:id', component: MovieDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
