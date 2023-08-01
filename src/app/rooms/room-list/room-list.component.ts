import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Room } from '../rooms.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'hina-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnInit, OnChanges {
  @Input() rooms: Room[] = [];
  @Output() roomEdited = new EventEmitter<Room>();
  @Output() roomSelected = new EventEmitter<Room>();
  @Output() roomDeleted = new EventEmitter<Room>();
  @Input() price: number | null = 0;
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  selectRoom(room: Room) {
    this.roomSelected.emit(room);
  }
  editRoom(room: Room) {
    //console.log('clickd');
    this.roomEdited.emit(room);
  }
  deleteRoom(room: Room) {
    this.roomDeleted.emit(room);
  }
}
