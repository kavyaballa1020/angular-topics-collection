import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
    title='Binding is two types'
}
