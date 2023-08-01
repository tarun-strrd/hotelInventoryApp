import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hina-root',
  // template: `hello world from inline template`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotelInventoryApp';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('hotelName', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton hotel';
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.rooms.availableRooms = 50;
  //   //console.log(this.name);
  // }
}
