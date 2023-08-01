import { BookingDTO } from './dto/create-booking.dto';
export declare class BookingService {
    bookings: BookingDTO[];
    create(booking: BookingDTO): BookingDTO[];
    getAll(): BookingDTO[];
}
