import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hina-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private router: Router, private loginService: LoginService) {}
  login(): void {
    if (this.loginService.login(this.email, this.password)) {
      this.router.navigate(['/rooms']);
    }
  }
}
