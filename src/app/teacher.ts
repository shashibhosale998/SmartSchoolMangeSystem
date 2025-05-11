export class Teacher {
  id?: number; // optional for creation

  employeeId!: string;
  firstName!: string;
  middleName?: string;
  lastName!: string;
  permanentAddress!: string;
  qualifications!: string;
  specializationSubject!: string;
  email!: string;
  contactNo!: string;
  experience!: string;
  gender!: string;
  maritalStatus!: string;
  dateOfBirth!: string; // use ISO string (e.g., '2024-05-10')
  designation!: string;
  bloodGroup!: string;
  joiningDate!: string; // use ISO string
}
