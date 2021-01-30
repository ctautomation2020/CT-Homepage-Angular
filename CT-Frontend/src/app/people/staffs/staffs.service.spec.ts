import { TestBed } from '@angular/core/testing';

import { StaffsService } from './staffs.service';

describe('StaffsService', () => {
  let service: StaffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
