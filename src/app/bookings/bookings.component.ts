import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingsService } from './bookings.service';
import { CustomValidator } from './validators/customValidator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hina-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(
    private fb: FormBuilder,
    private bookingService: BookingsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    //console.log(roomId);
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId, disabled: true },
          { validators: [Validators.required] }
        ),
        guestEmail: ['', [Validators.required, Validators.email]],
        checkinDate: ['', [Validators.required]],
        checkoutDate: ['', [Validators.required]],
        bookingStatus: ['', [Validators.required]],
        bookingAmount: ['', [Validators.required]],
        bookingDate: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required]],
        guestName: [
          '',
          [
            Validators.required,
            CustomValidator.validateName,
            CustomValidator.validateSpecialCharecters('*'),
          ],
        ],
        address: this.fb.group({
          addressLine1: ['', [Validators.maxLength(50), Validators.required]],
          addressLine2: ['', [Validators.maxLength(50)]],
          city: ['', [Validators.maxLength(20), Validators.required]],
          state: ['', [Validators.maxLength(20), Validators.required]],
          country: ['', [Validators.maxLength(20), Validators.required]],
          pinCode: ['', [Validators.maxLength(20), Validators.required]],
        }),
        guests: this.fb.array([this.fb.group({ name: [''], age: [''] })]),
        tnc: new FormControl(false, { validators: Validators.required }),
      },
      { updateOn: 'blur' }
    );
    // this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    // );
  }
  getBookingData(): void {}
  addBooking(): void {
    console.log(this.bookingForm.value);
    this.bookingService
      .bookRoom(this.bookingForm.getRawValue())
      .subscribe((data) => console.log(data));
  }
  addGuest(): void {
    this.guests.push(
      this.fb.group({
        guestName: ['', [Validators.required, Validators.email]],
        age: [''],
      })
    );
    console.log('ckif');
  }
  removeGuest(i: number): void {
    this.guests.removeAt(i);
  }
}
