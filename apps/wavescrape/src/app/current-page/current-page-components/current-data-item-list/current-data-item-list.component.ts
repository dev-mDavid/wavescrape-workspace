import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/firestore';


import { BreaksCurrent } from "../../../core/models/breaks-current.model";
import { CurrentBreakService } from "../../current-page-services/current-break.service";


@Component({
  selector: 'current-data-item__list',
  templateUrl: './current-data-item-list.component.html',
  styleUrls: ['./current-data-item-list.component.sass']
})

export class CurrentDataItemListComponent implements OnInit {
  currentBreak: Observable<BreaksCurrent>;

  constructor(
    public currentBreakService: CurrentBreakService
  ) { }


  ngOnInit() {
    this.currentBreak =
      this.currentBreakService
        .getCurrentBreakData('laJollaShores');
  }

  ngOnDestroy() {
  }

  expandState: boolean = true;
  expandIcon: string = "expand_more";

  toggleExpand() {
    this.expandState = !this.expandState;
    this.expandIcon = (this.expandIcon == "expand_more") ? "expand_less" : "expand_more";
  }
}
