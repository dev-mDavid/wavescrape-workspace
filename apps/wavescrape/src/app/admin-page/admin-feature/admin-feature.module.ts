import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const featureModules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule,
  // MatFormField,
  MatInputModule,
  FormsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ... featureModules    
  ],
  exports: [
    ... featureModules
  ]
})
export class AdminFeatureModule {}
