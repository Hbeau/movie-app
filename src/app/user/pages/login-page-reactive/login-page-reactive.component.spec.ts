import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageReactiveComponent } from './login-page-reactive.component';

describe('LoginPageReactiveComponent', () => {
  let component: LoginPageReactiveComponent;
  let fixture: ComponentFixture<LoginPageReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
