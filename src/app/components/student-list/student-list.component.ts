import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/students.service'; // Ensure correct path to service
import { Student } from '../../services/student.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [StudentService], 
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }
}
