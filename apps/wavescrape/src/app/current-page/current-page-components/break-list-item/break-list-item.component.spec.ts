import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakListItemComponent } from './break-list-item.component';
import { SharedModule } from '../../../shared/shared.module';

describe('BreakListItemComponent', () => {
  let component: BreakListItemComponent;
  let fixture: ComponentFixture<BreakListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BreakListItemComponent
       ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
