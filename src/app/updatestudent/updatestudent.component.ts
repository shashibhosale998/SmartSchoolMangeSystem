import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Correct import for Angular

@Component({
  selector: 'app-updatestudent',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  studentForm!: FormGroup;
  selectedStudent: any = null;
  fullNameSearch: string = '';
  isImageUpdated: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: [''],
      contactNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      emergencyContactNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      permanentAddress: [''],
      division: ['', Validators.required],
      className: ['', Validators.required],
      rollNo: ['', Validators.required],
      studentImagePath: [''],
      fatherImagePath: [''],
      motherImagePath: ['']
    });
  }

  // Search student by full name
  searchStudent(): void {
    const trimmedName = this.fullNameSearch.trim();
    if (!trimmedName) {
      alert('Please enter a full name to search.');
      return;
    }

    this.http.get<any[]>(`http://localhost:8080/students/search?fullName=${encodeURIComponent(trimmedName)}`)
      .subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.selectedStudent = data[0];
            this.studentForm.patchValue(this.selectedStudent);
          } else {
            alert('No matching student found.');
          }
        },
        error: () => alert('Error searching student.')
      });
  }

  // Update student data
  updateStudent(): void {
    if (!this.selectedStudent || !this.studentForm.valid) return;

    const updatedStudent = { ...this.studentForm.value };

    if (this.isImageUpdated) {
      updatedStudent.studentImagePath = this.selectedStudent.studentImagePath;
      updatedStudent.fatherImagePath = this.selectedStudent.fatherImagePath;
      updatedStudent.motherImagePath = this.selectedStudent.motherImagePath;
    }

    this.http.put(`http://localhost:8080/students/${this.selectedStudent.id}`, updatedStudent)
      .subscribe({
        next: () => alert('Student updated successfully.'),
        error: () => alert('Failed to update student.')
      });
  }

  // Handle image upload
  onFileChange(event: any, imageType: string): void {
    const file = event.target.files[0];
    if (file) {
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const result = e.target.result;
        if (imageType === 'student') this.selectedStudent.studentImagePath = result;
        else if (imageType === 'father') this.selectedStudent.fatherImagePath = result;
        else if (imageType === 'mother') this.selectedStudent.motherImagePath = result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Get image URL
  getImageUrl(relativePath: string): string {
    return 'http://localhost:8080' + relativePath;
  }

  // Navigation methods
  goToUpdateStudents() {
    this.router.navigate(['/app-updatestudent']);
  }

  goToAddStudent() {
    this.router.navigate(['/app-addstudent']);
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
  }goToDashboard(){
    this.router.navigate(['/app-admindashboard']);
  }
}
