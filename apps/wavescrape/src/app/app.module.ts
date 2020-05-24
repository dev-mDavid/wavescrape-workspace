import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';

import { environment } from "apps/wavescrape/src/environments/environment";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { HomePageComponent } from './home-page/home-page.component';
import { NavShellComponent } from './nav-shell/nav-shell.component';
@NgModule({
  declarations: [
    AppComponent, 
    NavShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // NavShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
