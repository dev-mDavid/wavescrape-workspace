import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from "./admin-page.component";
import { AdminBreaksPageComponent } from "./admin-page-pages/admin-breaks-page/admin-breaks-page.component";

const routes: Routes = [
  { path: '', component: AdminPageComponent },
  { path: 'breaks', component: AdminBreaksPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
