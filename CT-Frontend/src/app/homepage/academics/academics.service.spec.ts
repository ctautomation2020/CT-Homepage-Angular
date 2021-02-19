import { TestBed } from '@angular/core/testing';

import { AcademicsService } from './academics.service';

describe('AcademicsService', () => {
  let service: AcademicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
