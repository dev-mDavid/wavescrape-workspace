import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionListItemComponent } from './region-list-item.component';
import { CurrentSharedModule } from '../../current-shared/current-shared.module';

describe('RegionListItemComponent', () => {
  let component: RegionListItemComponent;
  let fixture: ComponentFixture<RegionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionListItemComponent ],
      imports: [
        CurrentSharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
