import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentPageRoutingModule } from './current-page-routing.module';
import { CurrentPageComponent } from './current-page.component';

import { BreakListItemComponent } from './current-page-components/break-list-item/break-list-item.component';
import { CurrentDataItemListComponent } from './current-page-components/current-data-item-list/current-data-item-list.component';
import { RegionListItemComponent } from './current-page-components/region-list-item/region-list-item.component';
import { CurrentSharedModule } from './current-shared/current-shared.module';



@NgModule({
  declarations: [
    CurrentPageComponent, 
    BreakListItemComponent, 
    CurrentDataItemListComponent, 
    RegionListItemComponent
  ],
  imports: [
    CommonModule,
    CurrentPageRoutingModule,
    CurrentSharedModule
  ]
})
export class CurrentPageModule { }
