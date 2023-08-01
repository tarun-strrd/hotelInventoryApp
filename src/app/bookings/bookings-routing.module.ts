import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { BookingGuard } from './guards/booking.guard';

const routes: Routes = [
  { path: '', component: BookingsComponent, canDeactivate: [BookingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
