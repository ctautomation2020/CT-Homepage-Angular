import { TestBed } from '@angular/core/testing';

import { ReferenceResolver } from './reference.resolver';

describe('ReferenceResolver', () => {
  let resolver: ReferenceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReferenceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
