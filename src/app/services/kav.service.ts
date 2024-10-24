import { Injectable } from '@angular/core';
import { kav } from '../models/kav.model';
@Injectable({
  providedIn: 'root'
})
export class KavService {

  constructor() { }
  name:string="Nanna"
  age:number=21
  id:number[]=[1,2,3,4]
  getName():string{
    return this.name
  }
  getAge():number{
    return this.age
  }
  getId():number[]{
    return this.id
  }
  private object1:kav[]=[
    {
      name:"Kavya",age:21,id:1
    },
    {
      name:"Kavya",age:21,id:1
    },
    {
      name:"Kavya",age:21,id:1
    },{
      name:"Kavya",age:21,id:1
    },{
      name:"Kavya",age:21,id:1
    }
  ]
  getObject():kav[]{
    return this.object1;
  }
}
