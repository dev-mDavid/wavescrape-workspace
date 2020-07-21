import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPageComponent } from './current-page.component';
import { CurrentSharedModule } from './current-shared/current-shared.module';
import { RegionListItemComponent } from './current-page-components/region-list-item/region-list-item.component';
import { BreakListItemComponent } from './current-page-components/break-list-item/break-list-item.component';
import { CurrentDataItemListComponent } from './current-page-components/current-data-item-list/current-data-item-list.component';

describe('CurrentPageComponent', () => {
  let component: CurrentPageComponent;
  let fixture: ComponentFixture<CurrentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentPageComponent, 
        RegionListItemComponent,
        BreakListItemComponent,
        CurrentDataItemListComponent
      ],
      imports: [CurrentSharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
