import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import { AngularFirestore } from "@angular/fire/firestore";
import { BreaksCurrent } from "../../core/models/breaks-current.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentBreakService {
  constructor(private db: AngularFirestore) { }

  /**
   * Gets all data for each break
   */
  getCurrentBreakData(currentBreakId: string) {
    return this.db
      .collection<BreaksCurrent>('breaksCurrent') // collection
      .doc(currentBreakId)
      .valueChanges();
  }



}