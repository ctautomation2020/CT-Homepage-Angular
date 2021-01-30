import { TestBed } from '@angular/core/testing';

import { PublicationsResolver } from './publications.resolver';

describe('PublicationsResolver', () => {
  let resolver: PublicationsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PublicationsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
