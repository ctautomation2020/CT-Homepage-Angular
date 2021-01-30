import { TestBed } from '@angular/core/testing';

import { StaffsResolver } from './staffs.resolver';

describe('StaffsResolver', () => {
  let resolver: StaffsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StaffsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
