import { CommonModule } from '@angular/common';
import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
      @Input() data!:string;

      @Output() messageEvent = new EventEmitter<string>();

      sendmessage(){
        this.messageEvent.emit("Hello from child component")
      }

      logmessage():string{
        return "Hello from the child component by using view message";
      }
}
