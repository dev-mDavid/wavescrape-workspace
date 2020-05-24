import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBreaksPageComponent } from './admin-breaks-page.component';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';

import { AdminShellModule } from '../../admin-shell/admin-shell.module';
import { AdminShellComponent } from '../../admin-shell/admin-shell.component';

describe('AdminBreakPageComponent', () => {
  let component: AdminBreaksPageComponent;
  let fixture: ComponentFixture<AdminBreaksPageComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ AdminBreaksPageComponent, AdminShellComponent ],
      imports: [AdminSharedModule ]
    })
    .compileComponents();
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
