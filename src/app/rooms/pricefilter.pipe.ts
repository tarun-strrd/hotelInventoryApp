import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './rooms.interface';

@Pipe({
  name: 'pricefilter',
})
export class PricefilterPipe implements PipeTransform {
  transform(rooms: Room[], price: number): Room[] {
    if (!price) return rooms;
    return rooms.filter((room) => room.price <= price);
  }
}
