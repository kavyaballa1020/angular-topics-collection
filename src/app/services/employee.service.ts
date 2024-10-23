import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root', 
})
export class EmployeeService {
  private employeeData: Employee[] = [
    { id: 1, name: 'Alice Smith', age: 30 },
    { id: 2, name: 'Bob Johnson', age: 25 },
    { id: 3, name: 'Charlie Brown', age: 35 },
    { id: 4, name: 'David Wilson', age: 40 },
    { id: 5, name: 'Eva Green', age: 28 }
  ];


  getEmployeeData(): Employee[] {
    return this.employeeData;
  }

  addemployee(newemployee:Employee):void{
    this.employeeData.push(newemployee);
  }
  deleteemployee(id:number):void{
    this.employeeData=this.employeeData.filter(emp=>emp.id!==id)
  }
}
