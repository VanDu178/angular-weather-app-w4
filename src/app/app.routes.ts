import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'; // Import MainLayout
import { HomeComponent } from './pages/home/home.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import{AboutComponent} from './pages/about/about.component'; // Import AboutComponent
import { authGuard } from './guards/auth.guard'; // 👈 import guard
import { LoginComponent } from './pages/auth/login/login.component'; // Import LoginComponent
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component'; // Import SignUpComponent

export const routes: Routes = [
  { 
    path: '',
    component: MainLayoutComponent, // Sử dụng MainLayoutComponent cho các route bên trong
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },  // Điều hướng / về /home
      { path: 'home', component: HomeComponent },  // Route home
      { path: 'login', component: LoginComponent},  // Route forecast
      { path: 'about', component: AboutComponent, canActivate: [authGuard],  } // Route forecast
    ]
  }
];
