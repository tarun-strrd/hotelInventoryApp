import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hina-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss'],
})
export class RoomBookingComponent implements OnInit {
  //id: number = 0;
  id$!: Observable<number>;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomId'];
    // });
    this.id$ = this.router.params.pipe(map((params) => params['roomId']));
    console.log(this.id$);
  }
}
