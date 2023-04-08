import { TestBed } from '@angular/core/testing';

import { IsAuthenticatedResolver } from './is-authenticated.resolver';

describe('IsAuthenticatedResolver', () => {
  let resolver: IsAuthenticatedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IsAuthenticatedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
