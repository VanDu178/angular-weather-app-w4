import { AuthService } from '../../services/auth.service';  // Import AuthService
import { authGuard } from './../../guards/auth.guard';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';  // Import đúng WeatherService
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { WeatherItemComponent } from '../../shared/weather-item/weather-item.component';
import { FavoriteLocationsComponent } from '../../shared/favorite-locations/favorite-locations.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, WeatherItemComponent, FavoriteLocationsComponent],
  providers: [WeatherService],  // Cung cấp WeatherService tại đây
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false; // Biến để kiểm tra trạng thái đăng nhập
  title = 'Thời tiết hôm nay';
  favoriteCities: any[] = [];  // Khởi tạo với mảng rỗng
  cities = [
    { name: 'Hà Nội', temp: 29, status: 'Nắng', icon: '☀️' },
    { name: 'TP. Hồ Chí Minh', temp: 31, status: 'Nhiều mây', icon: '⛅' },
    { name: 'Đà Nẵng', temp: 27, status: 'Mưa nhẹ', icon: '🌧️' },
    { name: 'Hải Phòng', temp: 30, status: 'Mưa rào', icon: '🌦️' },
    { name: 'Cần Thơ', temp: 30, status: 'Nắng nóng', icon: '🔥' },
    { name: 'Bình Định', temp: 29, status: 'Nắng', icon: '☀️' },
    { name: 'Quảng Ngãi', temp: 31, status: 'Nhiều mây', icon: '⛅' },
    { name: 'Phú Yên', temp: 29, status: 'Nắng', icon: '☀️' },
  ]

  constructor(private weatherService: WeatherService,private authService: AuthService) {}

  ngOnInit(): void {
    // Truyền dữ liệu vào biến favoriteCities sau khi component khởi tạo
    this.favoriteCities = this.weatherService.getFavoriteCities();
    this.isLoggedIn = this.authService.isLoggedIn(); // Kiểm tra trạng thái đăng nhập
  }

  onAddToFavorites(city: { name: string, temp: number, status: string, icon: string }) {
    this.weatherService.addToFavorites(city);
    this.favoriteCities = [...this.weatherService.getFavoriteCities()];  // Cập nhật danh sách yêu thích
    console.log("thoi tiet duoc them vao danh sach yeu thich",this.favoriteCities);  // Kiểm tra danh sách yêu thích
  }

  onRemoveFromFavorites(cityName: string) {
    this.weatherService.removeFromFavorites(cityName);
    this.favoriteCities = [...this.weatherService.getFavoriteCities()];  // Cập nhật danh sách yêu thích
  }
}
