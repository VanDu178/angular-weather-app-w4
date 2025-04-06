import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thêm import CommonModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Bạn có thể thêm bất kỳ logic nào ở đây
}
