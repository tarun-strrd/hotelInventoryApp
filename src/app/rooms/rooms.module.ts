import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { PricefilterPipe } from './pricefilter.pipe';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomBookingComponent,
    RoomListComponent,
    AddRoomsComponent,
    PricefilterPipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class RoomsModule {}
