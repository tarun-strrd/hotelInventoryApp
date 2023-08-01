import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookingsComponent } from '../bookings.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard implements CanDeactivate<BookingsComponent> {
  constructor(private snackBar: MatSnackBar) {}

  canDeactivate(
    component: BookingsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.bookingForm.pristine) {
      return true;
    }
    this.snackBar.open(
      'You have unsaved changes. Are you sure you want to leave?',
      'Dismiss',
      {
        duration: 5000,
      }
    );

    return false;
  }
}
