import { TestBed } from '@angular/core/testing';

import { DeviceResponsiveService } from './device-responsive.service';

describe('DeviceResponsiveService', () => {
  let service: DeviceResponsiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceResponsiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
