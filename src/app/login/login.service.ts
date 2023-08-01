import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() {}
  login(email: string, password: string): boolean {
    console.log(email);
    if (email === 'admin@gmail.com' && password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email === 'user@gmail.com' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    console.log(this.isLoggedIn, this.isAdmin);
    return this.isLoggedIn;
  }
}
