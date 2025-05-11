import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateteacher',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent {
  searchName: string = '';
  teachers: any[] = [];
  selectedTeacher: any = null;
  message: string = '';

  constructor(private http: HttpClient,private router:Router) {}

  searchTeacher() {
    if (!this.searchName.trim()) {
      this.message = 'Please enter a name to search.';
      return;
    }

    this.http.get<any[]>(`http://localhost:8080/api/teachers/search?name=${this.searchName}`)
      .subscribe(
        (data) => {
          this.teachers = data;
          this.message = data.length ? '' : 'No teachers found!';
        },
        (error) => {
          console.error(error);
          this.message = 'Error fetching teacher data.';
        }
      );
  }

  selectTeacher(teacher: any) {
    this.selectedTeacher = { ...teacher }; // clone to avoid auto binding
  }

  updateTeacher() {
    if (!this.selectedTeacher) return;

    this.http.put(`http://localhost:8080/api/teachers/${this.selectedTeacher.id}`, this.selectedTeacher)
      .subscribe(
        (response) => {
          this.message = 'Teacher updated successfully!';
        },
        (error) => {
          console.error(error);
          this.message = 'Error updating teacher.';
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
