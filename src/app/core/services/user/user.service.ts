import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {

  private $logged: BehaviorSubject<boolean> = new BehaviorSubject(false);
  logged$: Observable<boolean> = this.$logged.asObservable();

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (this.$logged.value === true) return of(true);
    if (username === 'toto' && password === 'password') {
      this.$logged.next(true);
      return of(true);
    } else {
      return throwError('Bad credentials')
    }
  }

  logout(): void {
    this.$logged.next(false);
  }
}
