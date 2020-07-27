import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';
import { FeaturesPageComponent } from './about-page-pages/features-page/features-page.component';

const routes: Routes = [
  { path: '', component: AboutPageComponent },
  { path: 'features', component: FeaturesPageComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }
