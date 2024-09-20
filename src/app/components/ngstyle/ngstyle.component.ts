import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngstyle',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {
  
  x: number =0

  getColor(): string {
    switch(this.x) {
      case 1: return 'green';
      case 2: return 'red';
      case 3: return 'pink';
      case 4: return 'blue';
      case 5: return 'yellow';
      case 6: return 'orange';
      default: return 'white';
    }
  }
}
