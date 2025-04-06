import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Các Standalone Components
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';

// Import cấu hình routes từ app.routes.ts
import { routes } from './app.routes';

// Import AuthService
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, MainLayoutComponent, HomeComponent, ForecastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,private authService: AuthService) {
    this.authService.checkAuth();
    // Áp dụng cấu hình routes
    this.router.resetConfig(routes);  // Cập nhật router với các routes
  }
}
