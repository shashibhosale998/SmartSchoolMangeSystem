import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css'],
  standalone: true
})
export class DeleteuserComponent {
  username: string = '';
  message: string = '';
  isError: boolean = false;

  constructor(private http: HttpClient,private router:  Router) {}

  deleteUser() {
  if (!this.username.trim()) {
    this.message = 'Username is required.';
    this.isError = true;
    return;
  }

  // Confirm with user
  const confirmDelete = window.confirm(`Are you sure you want to delete "${this.username}"?`);
  if (!confirmDelete) {
    this.message = 'User deletion cancelled.';
    this.isError = false;
    return;
  }

  this.http.delete(`http://localhost:8080/api/users/deleteByUsername/${this.username}`)
    .subscribe({
      next: (res: any) => {
        this.message = '✅ User deleted successfully.';
        this.isError = false;
        this.username = '';
      },
      error: (err) => {
        if (err.status === 404) {
          this.message = '❌ User not found.';
        } else {
          this.message = '❌ Something went wrong.';
        }
        this.isError = true;
      }
    });
}
goToViewUsers() {
this.router.navigate(['/app-viewuser']);
}

goToAddUser() {
this.router.navigate(['/app-adduser']);
}
 goToUpdateUser() {
    this.router.navigate(['/app-updateuser']);
  }

  goToDeleteUser() {
    this.router.navigate(['/app-deleteuser']);
  }
   goToUpdateStudents(){
    this.router.navigate(['/app-updatestudent']); 
  }
  goToAddStudent() {
    this.router.navigate(['/app-addstudent']); // Adjust path if needed
  }

  goToDeleteStudent() {
    this.router.navigate(['/app-deletestudent']);
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

  

  
  goToEvents() {
    this.router.navigate(['admin/events']);
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
}
