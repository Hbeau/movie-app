import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { FormsModule } from '@angular/forms';
import { MoviesResolver } from './resolvers/movies.resolver';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieListPageComponent,
    MovieDetailPageComponent,
    MoviePreviewComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    MoviesResolver
  ]
})
export class MovieModule { }
