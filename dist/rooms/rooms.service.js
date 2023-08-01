"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let RoomsService = class RoomsService {
    constructor() {
        this.rooms = [
            {
                roomNumber: '1',
                roomType: 'Deluxe Room',
                amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
                price: 500,
                photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                checkinTime: new Date('11-Nov-2021'),
                checkoutTime: new Date('12-Nov-2021'),
                rating: 4.5,
            },
            {
                roomNumber: '2',
                roomType: 'Deluxe Room',
                amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
                price: 1000,
                photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                checkinTime: new Date('11-Nov-2021'),
                checkoutTime: new Date('12-Nov-2021'),
                rating: 3.45654,
            },
            {
                roomNumber: '3',
                roomType: 'Private Suite',
                amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
                price: 15000,
                photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                checkinTime: new Date('11-Nov-2021'),
                checkoutTime: new Date('12-Nov-2021'),
                rating: 2.6,
            },
        ];
    }
    create(createRoomDto) {
        console.log(createRoomDto);
        createRoomDto.roomNumber = (0, uuid_1.v4)();
        console.log(createRoomDto);
        this.rooms = [...this.rooms, createRoomDto];
        console.log(this.rooms);
        return this.rooms;
    }
    findAll() {
        return this.rooms;
    }
    findOne(id) {
        this.rooms.find((room) => room.roomNumber === id);
    }
    update(id, updateRoomDto) {
        return this.rooms.map((room) => {
            if (room.roomNumber === id) {
                return updateRoomDto;
            }
            return room;
        });
    }
    remove(id) {
        return this.rooms.filter((room) => room.roomNumber !== id);
    }
};
RoomsService = __decorate([
    (0, common_1.Injectable)()
], RoomsService);
exports.RoomsService = RoomsService;
//# sourceMappingURL=rooms.service.js.map