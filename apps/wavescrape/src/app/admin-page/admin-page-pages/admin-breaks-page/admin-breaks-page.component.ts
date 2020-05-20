// Core
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription, } from "rxjs";
// import { map } from 'rxjs/add/operator/map';

// Database, Services, 
import { AdminBreaksService } from "../../admin-services/admin-breaks.service";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { database } from 'firebase';

// Interfaces, Models
import { RegionsByState, StringArray } from "../../../core/models/regions-by-state.model";
import { BreaksByRegion } from "../../../core/models/breaks-by-region.model";
import { BreaksCurrent } from "../../../core/models/breaks-current.model";

// Dialogs
import { MatDialog } from "@angular/material/dialog";
import { AddBreakDialogComponent } from "../../admin-dialogs/add-break-dialog/add-break-dialog.component";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-breaks',
  templateUrl: './admin-breaks-page.component.html',
  styleUrls: ['./admin-breaks-page.component.sass']
})

export class AdminBreaksPageComponent implements OnInit, OnDestroy {

  regionsByStates: RegionsByState[];
  breaksByRegions: BreaksByRegion[];
  breaksCurrent: BreakCurrent[];
  sub: Subscription;
  // dialog: MatDialog;
  selectedBreakName: string;

  boolBreakMapDocExists: boolean = false;
  boolBreakCurrentDocExists: boolean = false;

  constructor(
    private db: AngularFirestore,
    public adminBreaksService: AdminBreaksService,
    public dialog: MatDialog,

  ) { }

  showBreaksOfThisRegion(selectedRegion: string) {

    return this.sub = this.adminBreaksService
      .readBreaksByRegion(
        selectedRegion
      )
      .subscribe(breaksByRegions => (this.breaksByRegions = breaksByRegions));

  }

  /** showDetailsOfThisBreak
   *
   * showDetailsOfThisBreak
     
      * breakInfo
        * editBreakName
        * changeRegion
        
      * runBreakFeaturesCheck
        * breakMap.docExists()
        * breakCurrent.docExists()
        
      * if (breakMapDocExists == false)
        * generateDataModel.service()
      * if (breakMapDocExists == true)
        * editDataValues.dialog()
      
      * if (breakCurrentDocExists == false)
        * generateDataModel
      * if (breakCurrentDocExists == true)
        * editOrMockDataValues
        * editDataSources
   */

  testButton() {
    // console.log(
    //   this.breaksByRegions)
  }

  showDetailsOfThisBreak(breakName: string) {
    // console.log(breakName);
    // this.breakInfo();
    this.runBreakFeaturesCheck(breakName);
    return this.selectedBreakName = breakName;
  }

  breakInfo() { console.log('breakInfo') }

  runBreakFeaturesCheck(selectedBreak: string) {
    // this.breakMapDocExists()
    this.breakCurrentQuery(selectedBreak)
    // this.breaksCurrentDocExists(selectedBreak)
    // .subscribe(breaksCurrent => (this.breaksCurrent = breaksCurrent));  
  }

  // breakMapDocExists() { console.log('breakMapDocExists');}

  readBreakCurrentDocByBreak() { }

  accessBreakCurrentDocByBreak() { }

  breakCurrentQuery(breakValue: string) {
    return this.db.collection<BreakCurrent>("breaksCurrent", ref =>
      ref.where('break', '==', breakValue))
      .valueChanges();


    // console.log('breakCurrentDocExists')
    // this.boolBreakCurrentDocExists == false;

  }
  breaksCurrentDocExists() {
    // input:
    //  #1 selected break from the 2nd column
    //  #2 break value from breakCurrentDocExists

    // output:
    //  change bool value if true

    // if (this.selectedBreakName === this.breakCurrentQuery.break) {
    //   return boolBreakCurrentDocExists
    // }
  }






  openAddBreakDialog(idData: string, regionData: string): void {
    console.log('openAddBreakDialog');
    const dialogRef = this.dialog.open(AddBreakDialogComponent, {
      width: '400px',
      data: { id: idData, region: regionData }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminBreaksService.updateAddBreakToRegionDoc(result.id, result.break)
      }
    })
  }

  ngOnInit() {
    this.sub = this.adminBreaksService
      .readRegionsByState(
        "California"
      )
      .subscribe(regionsByStates => (this.regionsByStates = regionsByStates))
  }


  ngOnChanges() {

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}


