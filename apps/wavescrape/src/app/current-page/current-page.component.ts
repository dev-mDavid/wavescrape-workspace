import { Component, OnInit } from '@angular/core';
import { Breakpoints } from "@angular/cdk/layout";
import { DeviceResponsiveService } from "../core/device-responsive.service";

@Component({
  selector: 'current-page',
  templateUrl: './current-page.component.html',
  styleUrls: ['./current-page.component.sass']
})
export class CurrentPageComponent implements OnInit {
  isHandset$: any;
  isTablet$: any;
  isWeb$: any;

  // break1 = {
  //     name: 'San Diego — South County'
  //   }



  regions = [
    {
      name: "San Diego — North County",
      waterQuality: true,
      tempSuit: "Boardies",
      waveSize: "3–8ft",
      swellDirection: "W",
      breaks: [
        "Black's Beach",
        "La Jolla Shores",
        "Del Mar"
      ]
    },
    {
      name: "San Diego — South County",
      waterQuality: false,
      tempSuit: "3/2 Wetsuit",
      waveSize: "2–5ft",
      swellDirection: "NW"
    }
  ];

  breaks = [
    {
      name: "Blacks Beach"
    }
  ];



  constructor(
    DRS: DeviceResponsiveService
  ) {
    this.isHandset$ = DRS.whatDevice([Breakpoints.XSmall]);
    this.isTablet$ = DRS.whatDevice([Breakpoints.Small]);
    this.isWeb$ = DRS.whatDevice([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]);
  }

  ngOnInit(): void {
  }

}
