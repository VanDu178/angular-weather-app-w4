import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';  // Thêm import CommonModule

@Component({
  selector: 'app-favorite-locations',
  standalone: true,  // Đảm bảo đây là component standalone
  imports: [CommonModule],  // Import CommonModule vào đây
  templateUrl: './favorite-locations.component.html',
  styleUrls: ['./favorite-locations.component.css']
})
export class FavoriteLocationsComponent implements OnChanges {
  @Input() favoriteCities: { name: string, temp: number, status: string, icon: string }[] = [];
  @Output() removeFromFavorites = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['favoriteCities']) {
      console.log("favoriteCities đã được cập nhật:", this.favoriteCities);
    }
  }

  onRemoveFromFavorites(cityName: string) {
    this.removeFromFavorites.emit(cityName);
  }
}
