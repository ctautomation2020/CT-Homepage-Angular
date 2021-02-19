import { TestBed } from '@angular/core/testing';

import { AlumniService } from './alumni.service';

describe('AlumniService', () => {
  let service: AlumniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
