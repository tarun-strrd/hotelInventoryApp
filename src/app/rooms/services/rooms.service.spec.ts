import { TestBed } from '@angular/core/testing';

import { RoomsService } from './rooms.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
