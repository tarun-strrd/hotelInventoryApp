import { AppService } from './app.service';
import { Rooms } from './rooms';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Rooms[];
    addRooms(Rooms: Rooms): Rooms[];
    editRooms(rooms: Rooms): Rooms[];
    deleteRooms(roomNumber: number): Rooms[];
}
