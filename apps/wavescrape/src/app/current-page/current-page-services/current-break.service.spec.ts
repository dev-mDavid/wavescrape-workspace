import { TestBed } from '@angular/core/testing';

import { CurrentBreakService } from './current-break.service';

describe('CurrentBreakService', () => {
  let service: CurrentBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
