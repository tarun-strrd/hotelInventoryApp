import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
export declare class RoomsService {
    rooms: Room[];
    create(createRoomDto: CreateRoomDto): Room[];
    findAll(): Room[];
    findOne(id: string): void;
    update(id: string, updateRoomDto: UpdateRoomDto): (UpdateRoomDto | Room)[];
    remove(id: string): Room[];
}
