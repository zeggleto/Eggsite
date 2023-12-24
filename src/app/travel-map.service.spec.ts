import { TestBed } from '@angular/core/testing';

import { TravelMapService } from './travel-map.service';

describe('TravelMapService', () => {
  let service: TravelMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
