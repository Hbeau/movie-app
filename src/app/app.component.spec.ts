import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import {RouterTestingModule} from '@Angular/router/testing'
import { HeaderComponent } from './shared/components/header/header.component';

fdescribe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule,
        {}
      ]
    }).compileComponents();
  }));

beforeEach(()=>{
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
})

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title property', ()=> {
    expect(component.title).toEqual('first-app')
  })
  it('should have a h1 with title inside', () =>{
    fixture.detectChanges();
    const titleElem = fixture.debugElement.query(By.css("h1")).nativeElement;
    expect(titleElem.textContent).toContain("first-app")
  })
  it('should have a header component',()=>{

  })


});
