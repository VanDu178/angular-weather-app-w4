import { AuthService } from '../../services/auth.service'; 
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false; // Initialize isLoggedIn as false
  currentTime: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Call it as a function
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }
}
