import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakDialogComponent } from './add-break-dialog.component';
import { AdminSharedModule } from '../../admin-shared/admin-shared.module';

// import { MatDialogRef } from "@angular/material/dialog";
describe('AddBreakDialogComponent', () => {
  let component: AddBreakDialogComponent;
  let fixture: ComponentFixture<AddBreakDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBreakDialogComponent ],
      imports: [ 
        AdminSharedModule,
        // MatDialogRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBreakDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
