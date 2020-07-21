import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { AdminBreaksPageComponent } from './admin-breaks-page.component';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';
import { AdminShellComponent } from '../../admin-shell/admin-shell.component';

describe('AdminBreakPageComponent', () => {
  let component: AdminBreaksPageComponent;
  let fixture: ComponentFixture<AdminBreaksPageComponent>;      
  let router: Router;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [AdminBreaksPageComponent, AdminShellComponent],
      imports: [
        AdminSharedModule,
        RouterTestingModule.withRoutes([
          { path: 'admin/breaks', component: AdminBreaksPageComponent }
        ])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBreaksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });      

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
