import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Cung cấp service trên toàn bộ ứng dụng, nếu có dùng cái này rồi thì không cần dùng providers trong component sử dụng service này
})
export class WeatherService {
  private favoriteCities: { name: string, temp: number, status: string, icon: string }[] = [];

  getFavoriteCities() {
    return this.favoriteCities;
  }

  addToFavorites(city: { name: string, temp: number, status: string, icon: string }) {
    this.favoriteCities.push(city);
  }

  removeFromFavorites(cityName: string) {
    this.favoriteCities = this.favoriteCities.filter(city => city.name !== cityName);
  }
}
