import { TestBed } from '@angular/core/testing';

import { GithubLogoService } from './github-logo.service';

describe('GithubLogoService', () => {
  let service: GithubLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
