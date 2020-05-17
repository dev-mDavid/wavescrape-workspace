import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentPageComponent } from './current-page.component';

const routes: Routes = [{ path: '', component: CurrentPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentPageRoutingModule { }
