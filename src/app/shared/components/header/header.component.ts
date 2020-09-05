import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged$: Observable<boolean> = this.userService.logged$;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.logged$.subscribe(console.log)
  }

}
