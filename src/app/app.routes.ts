import { Routes } from '@angular/router';
import { EmployeeList } from './features/employees/employee-list/employee-list';
import { AttendanceForm } from './features/attendance/attendance-form/attendance-form';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeList },
  { path: 'attendance', component: AttendanceForm },
  { path: '**', redirectTo: 'employees' }
];
