import { BookingService } from './booking.service';
import { BookingDTO } from './dto/create-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(bookingDTO: BookingDTO): BookingDTO[];
    get(): BookingDTO[];
}
