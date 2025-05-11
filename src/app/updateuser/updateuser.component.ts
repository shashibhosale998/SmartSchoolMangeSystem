import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
  standalone: true
})
export class UpdateuserComponent {
  searchUsername: string = '';
  user: any = {};
  userFound: boolean = false;
  message: string = '';
  isSuccess: boolean = false;

  constructor(private http: HttpClient,private router: Router) {}

  searchUser() {
    this.http.get<any>(`http://localhost:8080/api/users/searchByUsername/${this.searchUsername}`).subscribe({
      next: (data) => {
        this.user = data;
        this.userFound = true;
        this.message = '';
      },
      error: () => {
        this.message = 'User not found';
        this.isSuccess = false;
        this.userFound = false;
      }
    });
  }

  updateUser() {
    this.http.put<any>(`http://localhost:8080/api/users/${this.user.id}`, this.user).subscribe({
      next: () => {
        this.message = 'User updated successfully';
        this.isSuccess = true;
      },
      error: () => {
        this.message = 'Error updating user';
        this.isSuccess = false;
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
