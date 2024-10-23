import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styles: [`
    h1 {
      font-size: 24px;
      color: darkblue;
    }
    button {
      margin: 10px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  `],
  providers: [EmployeeService],
  imports:[CommonModule,FormsModule]
})
export class EmployeeComponent {
  employees: Employee[] = [];
  newemployee:Employee={id:0,name:'',age:0}

  constructor(private readonly employeeService: EmployeeService) {}

  loadEmployeeData() {
    this.employees = this.employeeService.getEmployeeData();
  }

  addemployeedata(){
      this.employeeService.addemployee(this.newemployee)
      this.newemployee = { id: 0, name: '', age: 0 }; 
      this.loadEmployeeData();  
  }
  deleteemployeedata(){
    this.employeeService.deleteemployee(this.newemployee.id)
    this.loadEmployeeData();
  }
}
