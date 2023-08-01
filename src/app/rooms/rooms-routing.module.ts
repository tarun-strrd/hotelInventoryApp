import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomGuard } from './guards/room.guard';

const routes: Routes = [
  { path: 'add', component: AddRoomsComponent },
  {
    path: '',
    component: RoomsComponent,
    //children: [{ path: ':roomId', component: RoomBookingComponent }],
    //canActivateChild: [RoomGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
