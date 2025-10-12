import { TestBed } from '@angular/core/testing';

import { MetaThemeService } from './meta-theme.service';

describe('MetaThemeService', () => {
  let service: MetaThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
