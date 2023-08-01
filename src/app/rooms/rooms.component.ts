import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Rooms, Room } from './rooms.interface';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'hina-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements AfterViewInit, OnInit {
  hideRooms = false;
  hotelName = 'ABC';
  numberOfRooms = 10;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 4,
  };
  totalBytes: number = 0;
  roomList: Room[] = [];
  selectedRoom!: Room;
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;
  priceFilter = new FormControl(0);
  // @ViewChildren(HeaderComponent)
  // headerChildrenComponent!: QueryList<HeaderComponent>;
  constructor(
    private roomsService: RoomsService,
    private configService: ConfigService
  ) {}
  stream = new Observable((observer) => {
    observer.next('newData');
    observer.next('newData2');
    observer.complete();
  });

  toggle() {
    console.log(this.rooms.availableRooms);
    this.rooms.availableRooms = this.rooms.availableRooms > 0 ? 0 : 1;
  }
  ngOnInit(): void {
    // this.roomsService.getPhotos().subscribe((event) => {
    //   switch (event.type) {
    //     case HttpEventType.Sent: {
    //       console.log('request snet');
    //       break;
    //     }
    //     case HttpEventType.DownloadProgress: {
    //       this.totalBytes += event.loaded;
    //       break;
    //     }
    //     case HttpEventType.ResponseHeader: {
    //       console.log('request success');
    //       break;
    //     }
    //     case HttpEventType.Response: {
    //       console.log(event.body);
    //       break;
    //     }
    //   }
    // });
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
    this.stream.subscribe({
      next: (data) => console.log(data),
      complete: () => console.log('completed'),
      error: (err) => console.log(err),
    });
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = 'rooms view ';
  }
  selectRoom(room: Room): void {
    this.selectedRoom = room;
    //console.log(room);
  }
  addRoom(): void {
    const room = {
      //roomNumber: '4',
      price: 3500,
      amenities: 'free wifi, bathroom, room service,Ac ,Tv',
      roomType: 'private suite',
      photos:
        'https://images.unsplash.com/photo-1625244695851-1fc873f942bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      checkinTime: new Date('24-JUL-2023'),
      checkoutTime: new Date('25-07-2023'),
      rating: 3.5,
    };
    this.roomsService.addRooms(room).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  editRoom(room: Room): void {
    const editedRoom = { ...room, price: 0 };
    this.roomsService.editRoom(editedRoom).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  deleteRoom(room: Room): void {
    this.roomsService.deleteRoom(room).subscribe((rooms) => {
      this.roomList = rooms;
    });
  }
}
