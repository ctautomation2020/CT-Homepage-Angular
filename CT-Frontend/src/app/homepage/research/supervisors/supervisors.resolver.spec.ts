import { TestBed } from '@angular/core/testing';

import { SupervisorsResolver } from './supervisors.resolver';

describe('SupervisorsResolver', () => {
  let resolver: SupervisorsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SupervisorsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
