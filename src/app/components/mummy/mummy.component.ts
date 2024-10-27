import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { KidComponent } from '../kid/kid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mummy',
  standalone: true,
  imports: [CommonModule, FormsModule, KidComponent],
  templateUrl: './mummy.component.html',
  styleUrls: ['./mummy.component.css']
})
export class MummyComponent implements AfterViewInit {

  message: string = "Hello kid, I am your mummy";









  
  child: string = '';
  viewchild!:string;
  @ViewChild(KidComponent) kid!: KidComponent;
  ngAfterViewInit() {}
  getData(mes: string) {
    this.child = mes;
  }
  greetmethod() {
    this.viewchild = this.kid.greetParentView();
  }

}
