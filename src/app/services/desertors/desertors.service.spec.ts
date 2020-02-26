import { TestBed } from '@angular/core/testing';

import { DesertorsService } from './desertors.service';

describe('DesertorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesertorsService = TestBed.get(DesertorsService);
    expect(service).toBeTruthy();
  });
});
