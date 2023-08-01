import { AbstractControl } from '@angular/forms';
export class CustomValidator {
  static validateName(control: AbstractControl) {
    const value = control.value as string;
    console.log(value);
    if (value.includes('test')) {
      return {
        inValidName: true,
      };
    }
    return null;
  }
  static validateSpecialCharecters(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      const checkinDate = control.get('checkinDate')?.value as Date;
      const checkoutDate = control.get('checkoutDate')?.value;
      console.log(control.get('bookingAmount')?.value);
      console.log(checkinDate, checkoutDate);
      console.log(value);
      if (value.includes(char)) {
        return {
          msg: `cannot use ${char} in name`,
        };
      }
      return null;
    };
  }
  //   static validateDate(control: AbstractControl) {
  //     const checkinDate = control.get('checkinDate')?.value as Date;
  //     const checkoutDate = control.get('checkoutDate')?.value;
  //     console.log(control.get('bookingAmount')?.value);
  //     console.log(checkinDate, checkoutDate);
  //     if (checkinDate && checkoutDate) {
  //       const checkin = new Date(checkinDate);
  //       const checkout = new Date(checkoutDate);
  //       console.log(checkin);
  //       console.log(checkout);
  //     }
  //   }
}
