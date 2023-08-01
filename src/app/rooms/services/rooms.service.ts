import { Injectable } from '@angular/core';
import { Room } from '../rooms.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: Room[] = [];
  constructor(private http: HttpClient) {}
  getRooms() {
    return this.http.get<Room[]>('api/rooms');
  }
  addRooms(room: Room) {
    return this.http.post<Room[]>('/api/rooms', room);
  }
  editRoom(room: Room) {
    return this.http.put<Room[]>(`api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(room: Room) {
    return this.http.delete<Room[]>(`api/rooms/${room.roomNumber}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      { reportProgress: true }
    );
    return this.http.request(request);
  }
}
