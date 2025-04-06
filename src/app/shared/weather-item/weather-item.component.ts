import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thêm import CommonModule

@Component({
  selector: 'app-weather-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
  @Input() city: { name: string, temp: number, status: string, icon: string } | undefined;
  @Input() isLoggedIn: boolean = false; // Nhận giá trị từ component cha
  @Output() addToFavorites = new EventEmitter<{ name: string, temp: number, status: string, icon: string }>();
  @Output() removeFromFavorites = new EventEmitter<string>();
 
  onAddToFavorites() {
    if (this.city) {
      alert(`Bạn đã thêm ${this.city.name} vào danh sách yêu thích!`);
      this.addToFavorites.emit(this.city);
    }
  }

  onRemoveFromFavorites() {
    if (this.city) {
      alert(`Bạn đã xóa ${this.city.name} khỏi danh sách yêu thích!`);
      this.removeFromFavorites.emit(this.city.name);
    }
  }
}
