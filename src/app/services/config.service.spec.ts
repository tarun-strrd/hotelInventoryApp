import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { routeConfigToken } from './routeConfig.service';
import { InjectionToken } from '@angular/core';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[routeConfigToken,InjectionToken]
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
