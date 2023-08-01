import { Component } from '@angular/core';
import { Room } from '../rooms.interface';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hina-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss'],
})
export class AddRoomsComponent {
  room: Room = {
    roomType: '',
    price: 0,
    rating: 0,
    amenities: '',
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  };
  successMessage: string = '';
  constructor(private roomService: RoomsService) {}
  addRoom(addRoomForm: NgForm): void {
    this.roomService.addRooms(this.room).subscribe((rooms) => {
      this.successMessage = 'Room Added';
      addRoomForm.reset();
    });
  }
}
