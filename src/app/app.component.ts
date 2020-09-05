import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from './core/models/movie.interface';
import { MovieService } from './core/services/movie/movie.service';
import { Router, NavigationEnd, NavigationCancel, NavigationStart, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= "first-app"

  constructor() {
  }

}
