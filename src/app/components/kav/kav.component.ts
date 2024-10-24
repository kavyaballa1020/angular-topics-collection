import { Component } from '@angular/core';
import { KavService } from '../../services/kav.service';
import { kav } from '../../models/kav.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-kav',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './kav.component.html',
  styleUrl: './kav.component.css'
})
export class KavComponent {
  name!:string;
    age!:number;
    id!:number[];
    hello:kav[]=[];

    constructor(private obj:KavService){
      // this.name=this.obj.getName();
      // this.age=this.obj.getAge();
      // this.id=this.obj.getId();
      this.hello=this.obj.getObject();
    }
    

}
