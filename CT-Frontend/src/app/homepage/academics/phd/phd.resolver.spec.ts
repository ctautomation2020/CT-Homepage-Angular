import { TestBed } from '@angular/core/testing';

import { PhdResolver } from './phd.resolver';

describe('PhdResolver', () => {
  let resolver: PhdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
