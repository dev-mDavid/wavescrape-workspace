import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent }
  // { path: 'admin', loadChildren: () => import('./admin-page/admin.module').then(m => m.AdminModule) },
  // { path: 'current', loadChildren: () => import('./current-page/current.module').then(m => m.CurrentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
