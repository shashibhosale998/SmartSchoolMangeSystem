import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user = {
    username: '',
    password: '',
    role: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/users', this.user)
      .subscribe({
        next: res => {
          alert('User added successfully!');
          this.router.navigate(['/dashboard']); // or wherever you want to go
        },
        error: err => {
          console.error(err);
          alert('Failed to add user!');
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
