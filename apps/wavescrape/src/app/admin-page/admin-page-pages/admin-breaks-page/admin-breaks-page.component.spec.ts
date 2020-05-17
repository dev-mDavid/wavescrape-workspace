import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBreaksPageComponent } from './admin-breaks-page.component';

describe('AdminBreakPageComponent', () => {
  let component: AdminBreaksPageComponent;
  let fixture: ComponentFixture<AdminBreaksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBreaksPageComponent ]
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
