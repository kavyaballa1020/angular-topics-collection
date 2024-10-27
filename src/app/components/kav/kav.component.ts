import { Component, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-kav',
  standalone: true,
  imports: [],
  templateUrl: './kav.component.html',
  styleUrl: './kav.component.css'
})
export class KavComponent {
    @Input() d!:string;
    @Input() h!:string;

    @Output() message=new EventEmitter<string>();

    outputfun(){
      this.message.emit("hello kavya parent from child kav");
    }
}
