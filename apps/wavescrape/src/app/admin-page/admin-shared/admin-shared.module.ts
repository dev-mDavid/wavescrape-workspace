import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminShellModule } from '../admin-shell/admin-shell.module';

const modules = [
  CommonModule,
  SharedModule,
  AdminShellModule,
  MatSidenavModule,
  MatDialogModule,
  MatInputModule,
  FormsModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class AdminSharedModule {}
