import { Component, OnInit } from '@angular/core';
import { Breakpoints } from "@angular/cdk/layout";
import { DeviceResponsiveService } from "../../../core/device-responsive.service";

@Component({
  selector: 'wavescrape-workspace-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.sass']
})
export class FeaturesPageComponent implements OnInit {
  isHandset$: any;
  isTablet$: any;
  isWeb$: any;

  constructor(
    DRS: DeviceResponsiveService
  ) {
    this.isHandset$ = DRS.whatDevice([Breakpoints.XSmall]);
    this.isTablet$ = DRS.whatDevice([Breakpoints.Small]);
    this.isWeb$ = DRS.whatDevice([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]);
  }

  scrollToDiv(target): void {
    target.scrollIntoView({ 
      behavior: "smooth", 
      block: "start", 
      inline: "nearest" 
    });
  }  

  ngOnInit(): void {
  }

}
