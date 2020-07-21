import { TestBed } from '@angular/core/testing';

import { AdminBreaksService } from './admin-breaks.service';
import { BreaksByRegion } from "../../core/models/breaks-by-region.model";
import { AngularFirestore } from '@angular/fire/firestore/firestore';

// TODO
//   - create mock
//   - create spy

// readBreaksByRegion
// const FirestoreStub = {
//   collection: (name: string) => ({
//     doc: (_id: string) => ({
//       valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
//       set: (_d: any) => new Promise((resolve, _reject) => resolve())
//     })
//   })
// };


// const { mockFirebase } = require('firestore-jest-mock');
// mockFirebase({
//   database: {
//     BreaksByRegion: [
//       { 
//         id: 'mockId', 
//         region: 'mockRegion', 
//         breaks: [
//           "mockBreak1",
//           "mockBreak2"
//         ]
//       }
//     ]    
//   }
// });

describe('AdminBreaksService', () => {
  let service: AdminBreaksService;

// const FirestoreStub  = {
//     id: "mockId",
//     region: "mockRegion",
//     breaks: [
//       "mockBreak1",
//       "mockBreak2"
//     ]
//   };

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [
        // { provide: AngularFirestore, useValue: mockFirebase}
      // ]
    });
    service = TestBed.inject(AdminBreaksService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // const mockRegionValue: string = 'mockRegionValue';
  
  // console.log(service.readBreaksByRegion(mockFirebase.BreaksByRegion))
  it('should return an id and data', () => {
    expect(service.readBreaksByRegion('San Diego – North County')
    .toPromise()
    .then((id) => {id = 'sotemghint'})
    
  })



// const mockTrue: boolean = true;
//   it('should be true', () => {
//     expect(mockTrue).toBeTruthy();
//   })

});
