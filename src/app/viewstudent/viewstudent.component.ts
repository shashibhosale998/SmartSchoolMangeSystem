import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewstudent',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css'],
})
export class ViewstudentComponent implements OnInit {
  students: any[] = [];
  searchName: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Initial data can be loaded here if required
    // this.fetchStudents();
  }

  // Fetch all students
  fetchStudents(): void {
    this.http.get<any[]>('http://localhost:8080/students').subscribe({
      next: (data) => this.students = data,
      error: () => alert('Failed to load students.')
    });
  }

  // Search students by full name
  searchStudents(): void {
    const trimmedName = this.searchName.trim();
    if (!trimmedName) {
      alert('Please enter a name to search.');
      return;
    }

    this.http.get<any[]>(`http://localhost:8080/students/search?fullName=${encodeURIComponent(trimmedName)}`)
      .subscribe({
        next: (data) => {
          this.students = data;
          if (data.length === 0) {
            alert('No matching student found.');
          }
        },
        error: () => alert('Search failed. Please try again later.')
      });
  }

  // Reset search and student list
  resetSearch(): void {
    this.searchName = '';
    this.students = [];
  }

  // Resolve image path
  getImageUrl(relativePath: string): string {
    return 'http://localhost:8080' + relativePath;
  }
  goToUpdateStudents(){
    this.router.navigate(['/app-updatestudent']); 
  }
  // Navigation methods
  goToAddStudent() {
    this.router.navigate(['/app-addstudent']);
  }

  goToDeleteStudent() {
    this.router.navigate(['admin/delete-student']);
  }

  goToViewStudents() {
    this.router.navigate(['/app-viewstudent']);
  }
goToDashboard(){
    this.router.navigate(['/app-admindashboard']);
  }
  goToParent() {
    this.router.navigate(['admin/parent']);
  }

  

  

  
   goToAddTeacher() {
    this.router.navigate(['/app-addteacher']);
  }

  goToViewTeachers() {
    this.router.navigate(['/app-viewteacher']);
  }
  goToUpdateTeacher() {
this.router.navigate(['/app-updateteacher']);
}
 goToDeleteTeacher() {
    this.router.navigate(['/app-deleteteacher']);
  }

  goToEvents() {
    this.router.navigate(['admin/events']);
  }
}
