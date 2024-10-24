import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/students.service';
import { Student } from '../../models/student.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = new Student('', 0, '');
  selectedStudent: Student = new Student('', 0, '');
  deleteId: string | undefined = ''; // Allow undefined

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  // Fetch all students
  loadStudents(): void {
    this.studentService.getAllStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  // Add a new student
  addStudent(): void {
    this.studentService.addStudent(this.newStudent).subscribe((student: Student) => {
      this.students.push(student);
      this.newStudent = new Student('', 0, '');
    });
  }

  // Update a student
  updateStudent(): void {
    if (this.selectedStudent.id) {
      this.studentService.updateStudent(this.selectedStudent.id, this.selectedStudent)
        .subscribe((updatedStudent: Student) => {
          const index = this.students.findIndex((s) => s.id === updatedStudent.id);
          if (index !== -1) {
            this.students[index] = updatedStudent;
          }
          this.selectedStudent = new Student('', 0, '');
        });
    }
  }

  // Delete a student
  deleteStudent(): void {
    if (this.deleteId) {
      this.studentService.deleteStudent(this.deleteId).subscribe(() => {
        this.students = this.students.filter((s) => s.id !== this.deleteId);
        this.deleteId = '';
      });
    }
  }

  // Select a student for editing
  selectStudent(student: Student): void {
    this.selectedStudent = { ...student };
  }
}
