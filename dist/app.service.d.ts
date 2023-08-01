import { Rooms } from './rooms';
export declare class AppService {
    getRoomsList(): Rooms[];
    addRooms(rooms: Rooms): Rooms[];
    deleteRooms(roomNumber: number): Rooms[];
    editRooms(rooms: Rooms): Rooms[];
}
