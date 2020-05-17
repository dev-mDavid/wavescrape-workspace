import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentPageRoutingModule } from './current-page-routing.module';
import { CurrentPageComponent } from './current-page.component';

import { BreakListItemComponent } from './current-page-components/break-list-item/break-list-item.component';
import { CurrentDataItemListComponent } from './current-page-components/current-data-item-list/current-data-item-list.component';
import { RegionalListItemComponent } from './current-page-components/regional-list-item/regional-list-item.component';

@NgModule({
  declarations: [
    CurrentPageComponent, 
    BreakListItemComponent, 
    CurrentDataItemListComponent, 
    RegionalListItemComponent
  ],
  imports: [
    CommonModule,
    CurrentPageRoutingModule
  ]
})
export class CurrentPageModule { }
