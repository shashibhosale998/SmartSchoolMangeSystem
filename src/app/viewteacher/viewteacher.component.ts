import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewteacher',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.css']
})
export class ViewTeacherComponent implements OnInit {
  teacher= [];
  searchQuery = '';  // For search input
  apiUrl = 'http://localhost:8080/api/teachers';  // Your API endpoint
teachers: any;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    // this.loadTeachers(); // Load all teachers initially
  }

  // Fetch all teachers
  loadTeachers(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((teachers) => {
      this.teachers = teachers;
    });
  }

  // Handle searching teachers by name
  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.loadTeachers();  // If search query is empty, load all teachers
    } else {
      this.http.get<any[]>(`${this.apiUrl}/search?name=${this.searchQuery}`).subscribe((teachers) => {
        this.teachers = teachers;
      });
    }
  }

  // View teacher details (expand or navigate to another page)
  viewTeacher(id: number): void {
    console.log('Viewing teacher with ID:', id);
    // Implement logic to navigate to the teacher's detail page or open a modal
  }

  // Delete teacher (with confirmation)
  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        alert('Teacher deleted successfully');
        this.loadTeachers();  // Reload the teacher list after deletion
      });
    }
  }

  // Reset search and reload all teachers
  resetSearch(): void {
    this.searchQuery = '';
    this.loadTeachers(); // Reload all teachers when reset is clicked
  }
  // 🔽 Navigation methods
  goToDashboard() {
    this.router.navigate(['/app-admindashboard']);
  }

  goToAddUser() {
    this.router.navigate(['/app-adduser']);
  }

  goToViewUsers() {
    this.router.navigate(['/app-viewuser']);
  }

  goToUpdateUser() {
    this.router.navigate(['/app-updateuser']);
  }

  goToDeleteUser() {
    this.router.navigate(['/app-deleteuser']);
  }

  goToAddStudent() {
    this.router.navigate(['/app-addstudent']);
  }

  goToUpdateStudents() {
    this.router.navigate(['/app-updatestudent']);
  }

  goToDeleteStudent() {
    this.router.navigate(['/app-deletestudent']);
  }

  goToViewStudents() {
    this.router.navigate(['/app-viewstudent']);
  }

  goToParent() {
    this.router.navigate(['admin/parent']);
  }

  goToAddTeacher() {
    this.router.navigate(['admin/add-teacher']);
  }

 

  goToViewTeachers() {
    this.router.navigate(['admin/view-teachers']);
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
