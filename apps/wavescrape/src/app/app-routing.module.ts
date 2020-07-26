import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule) },
  { path: 'current', loadChildren: () => import('./current-page/current-page.module').then(m => m.CurrentPageModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
