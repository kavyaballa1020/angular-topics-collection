import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  standalone: true,
  imports: [],
  templateUrl: './onewaybinding.component.html',
  styleUrl: './onewaybinding.component.css'
})
export class OnewaybindingComponent {
  name:string="Kavya"
  isDisable:boolean=true
  urlimage:string='/src/assests/Kavya.JPG'

  Disable():void{
    this.isDisable=!this.isDisable
  }
}
