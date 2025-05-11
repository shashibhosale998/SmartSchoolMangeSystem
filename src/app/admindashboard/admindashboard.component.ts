import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  imports: [],
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

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

  constructor(private router: Router) {}

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
goToUpdateTeacher() {
this.router.navigate(['/app-updateteacher']);
}
 goToDeleteTeacher() {
    this.router.navigate(['/app-deleteteacher']);
  }
  goToViewTeachers() {
    this.router.navigate(['/app-viewteacher']);
  }
 

  

  goToEvents() {
    this.router.navigate(['admin/events']);
  }
}
