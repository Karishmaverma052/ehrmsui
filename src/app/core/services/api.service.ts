import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id?: number;
  employee_id: string;
  full_name: string;
  email: string;
  department: string;
}

export interface Attendance {
  id?: number;
  employee_id: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Use environment variable or fallback to localhost:8000
    this.apiUrl = this.getApiUrl();
  }

  private getApiUrl(): string {
    const apiUrl = (window as any)['__API_URL__'] || localStorage.getItem('apiUrl');
    if (apiUrl) {
      return apiUrl;
    }
    return 'http://localhost:8000'; // fallback for development
  }

  // Employee CRUD operations
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/get_employees`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/get_employee/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/create_employee`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/create_employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${id}`);
  }

  // Attendance operations
  getAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}/get_attendance`);
  }

  markAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(`${this.apiUrl}/mark_attendance`, attendance);
  }

  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/attendance/${id}`);
  }

  getEmployeeAttendance(employeeId: string): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}/attendance/employee/${employeeId}`);
  }
}