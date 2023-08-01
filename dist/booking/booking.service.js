"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const create_booking_dto_1 = require("./dto/create-booking.dto");
const uuid_1 = require("uuid");
let BookingService = class BookingService {
    constructor() {
        this.bookings = [];
    }
    create(booking) {
        console.log(create_booking_dto_1.BookingDTO);
        booking.bookingId = (0, uuid_1.v4)();
        this.bookings = [...this.bookings, booking];
        return this.bookings;
    }
    getAll() {
        return this.bookings;
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)()
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map