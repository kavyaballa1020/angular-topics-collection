import { Component } from '@angular/core';
import { KavComponent } from '../kav/kav.component';
@Component({
  selector: 'app-kavya',
  standalone: true,
  imports: [KavComponent],
  templateUrl: './kavya.component.html',
  styleUrl: './kavya.component.css'
})
export class KavyaComponent {
  
    data:string="Hello child from kavya parent"
    hello:string="Hello kav from Kavya"

    childmessage:string=''
    getmessage(message:string){
      this.childmessage=message;
    }
    
}
