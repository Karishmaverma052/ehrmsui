import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService, Attendance } from '../../../core/services/api.service';

@Component({
  selector: 'app-attendance-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './attendance-form.html',
  styleUrl: './attendance-form.scss',
})
export class AttendanceForm {
  form: FormGroup;
  statuses = ['present', 'absent', 'late'];

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.form = this.fb.group({
      employee_id: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const attendance: Attendance = this.form.value;
      this.api.markAttendance(attendance).subscribe({
        next: () => {
          this.form.reset();
          alert('Attendance marked successfully!');
        },
        error: (error) => {
          console.error('Error marking attendance:', error);
          alert('Error marking attendance. Please try again.');
        }
      });
    }
  }
}
