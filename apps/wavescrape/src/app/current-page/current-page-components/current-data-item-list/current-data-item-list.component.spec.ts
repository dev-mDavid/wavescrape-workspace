import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDataItemListComponent } from './current-data-item-list.component';

describe('CurrentDataItemListComponent', () => {
  let component: CurrentDataItemListComponent;
  let fixture: ComponentFixture<CurrentDataItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDataItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDataItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
