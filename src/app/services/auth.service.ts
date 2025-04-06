import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = signal<boolean>(false);

  get isLoggedIn() {
    return this._isLoggedIn.asReadonly(); // chỉ đọc từ bên ngoài
  }

  login(email: string, password: string): boolean {
    // Giả lập xác thực
    if (email === 'phamvandu77tphcm@gmail.com' && password === '123') {
      this._isLoggedIn.set(true);
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this._isLoggedIn.set(false);
    localStorage.removeItem('loggedIn');
  }

  checkAuth(): void {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    this._isLoggedIn.set(loggedIn);
  }
}
