import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    create(createRoomDto: CreateRoomDto): import("./entities/room.entity").Room[];
    findAll(): import("./entities/room.entity").Room[];
    findOne(id: string): void;
    update(id: string, updateRoomDto: UpdateRoomDto): (UpdateRoomDto | import("./entities/room.entity").Room)[];
    remove(id: string): import("./entities/room.entity").Room[];
}
