import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import { RouterTestingModule } from "@angular/router/testing";
describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AdminPageComponent, 
        AdminShellComponent 
      ],
      imports: [
        AdminSharedModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
