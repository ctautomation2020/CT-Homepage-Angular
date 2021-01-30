import { TestBed } from '@angular/core/testing';

import { StudentResolver } from './student.resolver';

describe('StudentResolver', () => {
  let resolver: StudentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
