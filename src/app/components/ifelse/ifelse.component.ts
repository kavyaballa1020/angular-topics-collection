import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
        role:number=2
        isVisible:Boolean=false

        togglevisibility():void{
          this.isVisible=!this.isVisible
        }
}
