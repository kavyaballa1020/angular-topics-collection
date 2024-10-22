import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/students'; // Make sure this URL is correct

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.apiUrl, student);
  }

  deleteStudent(id: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
