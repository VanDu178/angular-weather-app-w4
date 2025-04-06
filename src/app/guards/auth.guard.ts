import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = localStorage.getItem('loggedIn'); // giả lập
  const router = inject(Router);

  if (!isAuthenticated) {
    alert('Bạn cần đăng nhập để xem danh sách yêu thích!');
    router.navigate(['/home']);
    return false;
  }

  return true;
};
