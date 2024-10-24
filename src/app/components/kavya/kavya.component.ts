import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { kavya } from '../../models/kav.model';

@Component({
  selector: 'app-kavya',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './kavya.component.html',
  styleUrl: './kavya.component.css'
})
export class KavyaComponent {

  kavyaa:boolean=false;
  disable:boolean=true;
      toggle():void{
        this.kavyaa=!this.kavyaa;
      }

      hello=[
        {name:"kavya",age:21},
        {name:"ankita",age:19},
        {name:"nanna",age:44}
      ]

      attractive:boolean=false

      togglebutton():void{
          this.disable=!this.disable
      }
      color:string="black"

      inputtext:string=''
      hello1():void{
        alert("Form submitted")
      }
       objj:kavya[]=[
        {name:"Kavya",age:21,id:1}
      ]

}
