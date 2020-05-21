import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminFeatureModule } from './admin-feature/admin-feature.module';

import { AdminPageComponent } from './admin-page.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminBreaksPageComponent } from './admin-page-pages/admin-breaks-page/admin-breaks-page.component';
import { AddBreakDialogComponent } from './admin-dialogs/add-break-dialog/add-break-dialog.component';


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
    AdminFeatureModule
  ]
})
export class AdminPageModule {}
