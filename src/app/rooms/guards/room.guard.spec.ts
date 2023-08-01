import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { RoomGuard } from './room.guard';

describe('RoomGuard', () => {
  let guard: RoomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoomGuard,
      ],
    });
    guard = TestBed.inject(RoomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
