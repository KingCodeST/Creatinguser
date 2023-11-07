import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'password2' },
    { username: 'user2', password: 'password2' },
  ];

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('current', JSON.stringify(user));
      return true;
    }
    return false;
  }
  register(username: string, password: string): boolean {
    if (!this.users.some((u) => u.username === username)) {
      this.users.push({ username, password });
      return true;
    }
    return false;
  }
}
