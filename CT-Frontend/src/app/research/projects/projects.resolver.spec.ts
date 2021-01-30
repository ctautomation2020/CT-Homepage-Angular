import { TestBed } from '@angular/core/testing';

import { ProjectsResolver } from './projects.resolver';

describe('ProjectsResolver', () => {
  let resolver: ProjectsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProjectsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
