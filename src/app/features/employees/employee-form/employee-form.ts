import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService, Employee } from '../../../core/services/api.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  form: FormGroup;
  departments = ['HR', 'IT', 'Finance', 'Operations', 'Marketing'];
  @Output() employeeAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private api: ApiService, private snackBar: MatSnackBar, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      employee_id: ['', Validators.required],
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const employee: Employee = this.form.value;
      this.api.addEmployee(employee).subscribe({
        next: () => {
          this.form.reset();
          this.cdr.detectChanges();
          this.snackBar.open('Employee added successfully!', 'Close', { duration: 3000 });
          this.employeeAdded.emit();
        },
        error: (error) => {
          console.error('Error adding employee:', error);
          this.snackBar.open('Error adding employee. Please try again.', 'Close', { duration: 3000 });
        }
      });
    }
  }
}
