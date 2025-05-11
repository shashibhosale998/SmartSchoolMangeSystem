import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteacher',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent {
  teacherForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.teacherForm = this.fb.group({
      employeeId: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      qualifications: ['', Validators.required],
      specializationSubject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      experience: ['', Validators.required],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      designation: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      joiningDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      this.http.post('http://localhost:8080/api/teachers', this.teacherForm.value)
        .subscribe({
          next: () => {
            alert('Teacher added successfully!');
            this.teacherForm.reset();
          },
          error: (err) => {
            console.error('Error:', err);
            alert('Failed to add teacher.');
          }
        });
    }
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
