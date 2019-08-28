import { TestBed } from '@angular/core/testing';

import { NgxNZThailandSelectorService } from './ngx-nzthailand-selector.service';

describe('NgxNZThailandSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNZThailandSelectorService = TestBed.get(NgxNZThailandSelectorService);
    expect(service).toBeTruthy();
  });
});
