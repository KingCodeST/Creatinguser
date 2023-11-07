import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username = '';
  password = '';
  registrationFailed() {}

  onRegister() {
    if (this.authService.register(this.username, this.password)) {
      console.log('successfully register', this.username, this.password);
      this.username = '';
      this.password = '';
      this.router.navigate(['/login']);
    } else {
      console.log(' error registering ');
    }
  }
}
