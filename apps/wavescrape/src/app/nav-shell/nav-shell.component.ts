import { Component, OnInit } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { DeviceResponsiveService } from "../core/device-responsive.service"; 

@Component({
  selector: 'nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.sass']
})
export class NavShellComponent implements OnInit {
  isHandset$: any;
  isTablet$: any;
  isWeb$: any;

  constructor(DRS: DeviceResponsiveService) {
    this.isHandset$ = DRS.whatDevice([Breakpoints.XSmall]);
    this.isTablet$ = DRS.whatDevice([Breakpoints.Small]);
    this.isWeb$ = DRS.whatDevice([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]);
  }

  ngOnInit(): void {}
}
