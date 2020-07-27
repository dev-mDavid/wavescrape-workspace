import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { FeaturesPageComponent } from './about-page-pages/features-page/features-page.component';


@NgModule({
  declarations: [AboutPageComponent, FeaturesPageComponent],
  imports: [
    CommonModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule { }
