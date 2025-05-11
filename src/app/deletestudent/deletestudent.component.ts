import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletestudent',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent {
  searchName: string = '';
  students: any[] = [];
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Search students by full name
  searchStudents(): void {
    if (!this.searchName.trim()) {
      this.message = 'Please enter a name to search.';
      this.students = [];
      return;
    }


    this.http.get<any[]>(`http://localhost:8080/students/search?fullName=${this.searchName.trim()}`)
      .subscribe({
        next: (data) => {
          this.students = data;
          this.message = data.length === 0 ? 'No students found.' : '';
        },
        error: () => {
          this.message = 'Error occurred while searching.';
        }
      });
  }
  
  // Delete student by ID
  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.http.delete(`http://localhost:8080/students/${id}`).subscribe({
        next: () => {
          this.message = `Student with ID ${id} deleted successfully.`;
          this.students = this.students.filter(student => student.id !== id);
        },
        error: () => {
          this.message = 'Error occurred while deleting student.';
        }
      });
    }
  }

  // Helper method to generate full image URL
  getImageUrl(relativePath: string): string {
    return 'http://localhost:8080' + relativePath;
  }
goToDashboard(){
    this.router.navigate(['/app-admindashboard']);
  }
  // Navigation methods
  goToUpdateStudents(){
    this.router.navigate(['/app-updatestudent']); 
  }

  goToAddStudent() { this.router.navigate(['/app-addstudent']); }
  goToDeleteStudent() { this.router.navigate(['/app-deletestudent']); }
  goToViewStudents() { this.router.navigate(['/app-viewstudent']); }
  goToParent() { this.router.navigate(['admin/parent']); }
  
  
  
  goToEvents() { this.router.navigate(['admin/events']); }
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
}
