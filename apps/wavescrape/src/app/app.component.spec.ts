import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
// import { NavShellModule } from './nav-shell/nav-shell.module';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterTestingModule } from "@angular/router/testing";


describe('AppComponent', () => {
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        NavShellComponent, 
        HomePageComponent
      ],
      imports: [
        HttpClientModule,
        // RouterModule,
        RouterTestingModule.withRoutes([]),
        SharedModule
        // NavShellModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
