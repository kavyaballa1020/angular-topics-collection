import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kid',
  standalone: true,
  imports: [],
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.css'
})
export class KidComponent {
  
    @Input() data!:string;

    @Output() mes=new EventEmitter<string>();

    senddata(){
      this.mes.emit("hello mummy");
    }
    greetParentView(){
      return "Hello mummy from view child"
    }
}
