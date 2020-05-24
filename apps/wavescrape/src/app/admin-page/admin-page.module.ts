import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminSharedModule } from './admin-shared/admin-shared.module';

import { AdminPageComponent } from './admin-page.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminBreaksPageComponent } from './admin-page-pages/admin-breaks-page/admin-breaks-page.component';
import { AddBreakDialogComponent } from './admin-dialogs/add-break-dialog/add-break-dialog.component';


@NgModule({
  declarations: [
    AdminPageComponent,    
    AdminShellComponent,
    AdminBreaksPageComponent,
    AddBreakDialogComponent,
  ],
  imports: [    
    CommonModule, 
    AdminPageRoutingModule,
    AdminSharedModule
  ]
})
export class AdminPageModule {}
