import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalListItemComponent } from './regional-list-item.component';

describe('RegionalListItemComponent', () => {
  let component: RegionalListItemComponent;
  let fixture: ComponentFixture<RegionalListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
