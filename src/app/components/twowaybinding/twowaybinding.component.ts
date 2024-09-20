import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {
    a:number=0
    b:number=0
    result:number=0
    add():void{
      this.result=this.a+this.b;
    }
    name:string=''
}
