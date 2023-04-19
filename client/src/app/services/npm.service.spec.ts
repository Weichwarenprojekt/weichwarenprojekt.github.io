import { TestBed } from '@angular/core/testing';

import { NpmService } from './npm.service';

describe('NpmService', () => {
  let service: NpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
