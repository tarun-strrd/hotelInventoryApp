import { TestBed } from '@angular/core/testing';

import { BookingsService } from './bookings.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookingsService', () => {
  let service: BookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
