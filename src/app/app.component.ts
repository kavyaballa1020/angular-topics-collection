import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule], // Import RouterModule and others
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorial';
}
