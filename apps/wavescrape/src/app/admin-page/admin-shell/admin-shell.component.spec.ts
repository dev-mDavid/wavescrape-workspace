import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShellComponent } from './admin-shell.component';
// import { MatIconModule } from "@angular/material/icon";
// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatListModule } from "@angular/material/list";

// import { AdminPageModule  } from "../admin-page.module";
import { SharedModule } from "../../shared/shared.module";
import { AdminFeatureModule } from '../admin-feature/admin-feature.module';

describe('AdminShellComponent', () => {
  let component: AdminShellComponent;
  let fixture: ComponentFixture<AdminShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminShellComponent],
      imports: [
        // AdminPageModule,
        AdminFeatureModule
        // MatIconModule,
        // MatSidenavModule,
        // MatToolbarModule,
        // MatListModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
