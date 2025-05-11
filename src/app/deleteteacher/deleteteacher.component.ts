import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteteacher',
  imports: [ CommonModule, FormsModule, HttpClientModule ],
  templateUrl: './deleteteacher.component.html',
  styleUrls: ['./deleteteacher.component.css']
})
export class DeleteteacherComponent {
  teacherName: string = '';   // Name entered by user
  teachers: any[] = [];       // Array to hold search results
  message: string = '';       // Success or error message

  constructor(private http: HttpClient,private router:Router) {}

  // Method to search teachers by name
  searchTeacherByName() {
    if (this.teacherName.trim()) {
      this.http.get<any[]>(`http://localhost:8080/api/teachers/search?name=${this.teacherName}`)
        .subscribe(
          (data) => {
            this.teachers = data;
            if (data.length === 0) {
              this.message = 'No teachers found!';
            } else {
              this.message = '';
            }
          },
          (error) => {
            this.message = 'Error retrieving teachers';
            console.error(error);
          }
        );
    } else {
      this.message = 'Please enter a teacher name to search.';
    }
  }

  // Method to delete teacher by ID
  deleteTeacher(id: number) {
    this.http.delete(`http://localhost:8080/api/teachers/${id}`)
      .subscribe(
        (response) => {
          this.message = 'Teacher deleted successfully';
          this.teachers = this.teachers.filter(teacher => teacher.id !== id);
        },
        (error) => {
          this.message = 'Error deleting teacher';
          console.error(error);
        }
      );
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
