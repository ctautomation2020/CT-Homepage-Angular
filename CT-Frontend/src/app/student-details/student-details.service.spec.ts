import { TestBed } from '@angular/core/testing';

import { StudentDetailsService } from './student-details.service';

describe('StudentDetailsService', () => {
  let service: StudentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
