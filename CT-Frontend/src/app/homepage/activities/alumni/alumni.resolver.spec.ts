import { TestBed } from '@angular/core/testing';

import { AlumniResolver } from './alumni.resolver';

describe('AlumniResolver', () => {
  let resolver: AlumniResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlumniResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
