import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from "./components/employee/employee.component";
import { KavComponent } from "./components/kav/kav.component";
import { KavyaComponent } from "./components/kavya/kavya.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule, EmployeeComponent, KavComponent, KavyaComponent], // Import RouterModule and others
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorial';
}
