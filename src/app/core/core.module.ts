import { NgModule } from '@angular/core';
import { MovieService } from './services/movie/movie.service';
import { UserService } from './services/user/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from './interceptors/url.interceptor';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    MovieService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
  ]
})
export class CoreModule { }
