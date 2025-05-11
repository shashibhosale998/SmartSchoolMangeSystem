import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // ✅ Added missing import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addstudent',
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
  HttpClientModule],
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddStudentComponent {
  studentForm: FormGroup;
  studentImage!: File;
  fatherImage!: File;
  motherImage!: File;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router // ✅ Injected Router
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: [''],
      contactNo: ['', Validators.required],
      emergencyContactNo: [''],
      email: ['', [Validators.required, Validators.email]],
      permanentAddress: [''],
      division: [''],
      className: [''],
      rollNo: ['', Validators.required]
    });
  }

  onFileChange(event: any, type: string): void {
    const file = event.target.files[0];
    if (type === 'student') {
      this.studentImage = file;
    } else if (type === 'father') {
      this.fatherImage = file;
    } else if (type === 'mother') {
      this.motherImage = file;
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid || !this.studentImage || !this.fatherImage || !this.motherImage) {
      alert('Please fill all required fields and upload all images.');
      return;
    }

    const formData = new FormData();
    formData.append('student', JSON.stringify(this.studentForm.value));
    formData.append('studentImage', this.studentImage);
    formData.append('fatherImage', this.fatherImage);
    formData.append('motherImage', this.motherImage);

    this.http.post('http://localhost:8080/students', formData).subscribe({
      next: () => {
        alert('Student added successfully!');
        this.studentForm.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Error adding student.');
      }
    });
  }

  // ✅ Navigation methods
  goToAddStudent() {
    this.router.navigate(['/app-addstudent']);
  }
  goToUpdateStudents(){
    this.router.navigate(['/app-updatestudent']); 
  }
goToDashboard(){
    this.router.navigate(['/app-admindashboard']);
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
