import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { LoginPageReactiveComponent } from './pages/login-page-reactive/login-page-reactive.component';

@NgModule({
  declarations: [LoginPageComponent, UserPageComponent, LoginPageReactiveComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class UserModule { }
