import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { NavShellModule } from '../nav-shell/nav-shell.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    // NavShellModule
    
  ]
})
export class HomePageModule { }
