import { TestBed } from '@angular/core/testing';

import { SupervisorsService } from './supervisors.service';

describe('SupervisorsService', () => {
  let service: SupervisorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
