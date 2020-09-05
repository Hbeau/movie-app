import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';
import { Subscription, of, ConnectableObservable } from 'rxjs';
import { publish, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  error: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.logged$.subscribe((logged) => {
      if (logged) {
        this.router.navigateByUrl('/user');
      }
    })
  }

  onSubmit(form: NgForm) {
    const username = form.controls.username.value;
    const password = form.controls.password.value;

    (<ConnectableObservable<any>> this.userService.login(username, password).pipe(
      catchError((e) => {
        this.error = 'Bad credentials';
        return of(null);
      }),
      publish()
    )).connect();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
