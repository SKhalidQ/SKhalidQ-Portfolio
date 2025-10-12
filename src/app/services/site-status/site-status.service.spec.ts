import { TestBed } from '@angular/core/testing';

import { SiteStatusService } from './site-status.service';

describe('ConnectionStatusService', () => {
  let service: SiteStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
