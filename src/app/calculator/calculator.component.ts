import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
    result:number=0
    addition(a:string,b:string):void{
      const num1=parseInt(a);
      const num2=parseInt(b)
      this.result=num1+num2;
    }
     substraction(a:string,b:string):void{
      const num1=parseInt(a);
      const num2=parseInt(b)
      this.result=num1-num2;
    }   
     multiplication(a:string,b:string):void{
      const num1=parseInt(a);
      const num2=parseInt(b)
      this.result=num1*num2;
    } 
    Division(a:string,b:string):void{
      const num1=parseInt(a);
      const num2=parseInt(b)
      this.result=num1/num2;
    }
    
}
