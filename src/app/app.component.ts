import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from "./components/employee/employee.component";
import { KavyaComponent } from "./components/kavya/kavya.component";
import { BindingComponent } from "./components/binding/binding.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule, EmployeeComponent, KavyaComponent, BindingComponent, CalculatorComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorial';
}
