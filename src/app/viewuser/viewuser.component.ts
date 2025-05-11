import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  users: any[] = []; // To store the list of all users
  filteredUsers: any[] = []; // To store the filtered list of users based on search
  searchTerm: string = ''; // To store the current search term

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    // this.getUsers(); // Fetch users when the component is initialized
  }

  // Method to fetch all users from the backend
  getUsers(): void {
    this.http.get<any[]>('http://localhost:8080/api/users')  // Update URL as needed
      .subscribe(response => {
        this.users = response;  // Save the fetched users in the 'users' array
        this.filteredUsers = response; // Initialize the filtered users list with all users
      }, error => {
        console.error('Error fetching users:', error);
      });
  }

  // Method to filter users based on the search term
  searchUsers(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredUsers = this.users; // If search term is empty, show all users
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Method to search users when the search button is clicked
  searchByUsername(): void {
    this.searchUsers();
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
  goToEvents() {
    this.router.navigate(['admin/events']);
  }
   goToUpdateTeacher() {
this.router.navigate(['/app-updateteacher']);
}
 goToDeleteTeacher() {
    this.router.navigate(['/app-deleteteacher']);
  }
}
