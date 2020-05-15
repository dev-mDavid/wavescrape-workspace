import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { MmtListItemComponent } from '../mmt-list-item/mmt-list-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { NavShellComponent } from "../nav-shell/nav-shell.component";
// import { CurrentDataItemHorizontalScrollComponent } from '../current-page/current-components/current-data-item__horizontal-scroll/current-data-item__horizontal-scroll.component';

const components = [
  NavShellComponent
  // CurrentDataItemHorizontalScrollComponent,
  // MmtListItemComponent
];

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule
];
@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule {}
