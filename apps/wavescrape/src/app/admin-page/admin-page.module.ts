import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminBreaksPageComponent } from './admin-page-pages/admin-breaks-page/admin-breaks-page.component';
import { AddBreakDialogComponent } from './admin-dialogs/add-break-dialog/add-break-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminPageComponent, 
    AdminShellComponent, 
    AdminBreaksPageComponent, 
    AddBreakDialogComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    SharedModule,
    MatDialogModule,
    // MatFormField,
    MatInputModule,
    FormsModule    
  ]
})
export class AdminPageModule { }
