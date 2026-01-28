import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    alert(`Login Successful!\nEmail: ${this.email}`);
  }
}
