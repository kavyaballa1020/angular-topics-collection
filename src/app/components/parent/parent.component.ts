import { ChildComponent } from './../child/child.component';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
      data:string="Hi Child i am your parent";

      message:string='';

      receiveMessage(event:string){
          this.message=event
      }

      @ViewChild (ChildComponent) childComponent!:ChildComponent;


      viewmessage:string=''
      ngAfterViewInit(){

      }
      callchildmethod(){
        this.viewmessage=this.childComponent.logmessage();
      }
}
