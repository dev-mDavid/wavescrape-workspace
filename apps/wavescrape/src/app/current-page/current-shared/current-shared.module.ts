import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

const modules = [
  CommonModule,
  SharedModule
];

@NgModule({
  declarations: [],
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class CurrentSharedModule { }
