import { TestBed } from '@angular/core/testing';

import { AdminBreaksService } from './admin-breaks.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore/firestore';



describe('AdminBreaksService', () => {
  let service: AdminBreaksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      provide: AngularFirestore, useValue: FirestoreStub
    });
    service = TestBed.inject(AdminBreaksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
