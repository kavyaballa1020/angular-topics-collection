import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
      names:string[]=["Nanna","Amma","Minnu","Kavya","Pavan","Ankita"]
}
