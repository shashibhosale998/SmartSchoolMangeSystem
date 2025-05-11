import { Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddStudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { ViewTeacherComponent } from './viewteacher/viewteacher.component';
import { DeleteteacherComponent } from './deleteteacher/deleteteacher.component';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';


export const routes: Routes = [
    { path: '', component: UserloginComponent },
    { path: 'app-userslogin', component: UserloginComponent },
    { path: 'app-admindashboard', component: AdmindashboardComponent },
    { path: 'app-addstudent', component: AddStudentComponent },
    { path: 'app-viewstudent', component: ViewstudentComponent },
    { path: 'app-deletestudent', component: DeletestudentComponent },
    { path: 'app-updatestudent', component: UpdatestudentComponent },
    { path: 'app-adduser', component: AdduserComponent },
    { path: 'app-updateuser', component: UpdateuserComponent },
    { path: 'app-viewuser', component: ViewuserComponent },
    { path: 'app-deleteuser', component: DeleteuserComponent },
    { path: 'app-addteacher', component: AddteacherComponent },
    { path: 'app-viewteacher', component: ViewTeacherComponent },
  { path: 'app-deleteteacher', component: DeleteteacherComponent },
  { path: 'app-updateteacher', component: UpdateteacherComponent },

    { path: '**', redirectTo: '' }
    
];
