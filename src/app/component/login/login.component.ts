import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  username = '';
  password = '';
  display: true | undefined;

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.snackBar.open('Successfully Login', undefined, {
        duration: 2000,
      });

      console.log('Successfully Login', this.username, this.password);
      this.username = '';
      this.password = '';
    } else {
      console.log('error login');
      this.snackBar.open('User Already Exist', undefined, {
        duration: 2000,
      });
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
