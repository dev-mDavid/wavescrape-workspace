import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavShellComponent } from './nav-shell.component';
import { SharedModule } from '../shared/shared.module';

describe('NavShellComponent', () => {
  let component: NavShellComponent;
  let fixture: ComponentFixture<NavShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavShellComponent ],
      imports: [ SharedModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
