import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService, Attendance } from '../../../core/services/api.service';

@Component({
  selector: 'app-attendance-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  templateUrl: './attendance-list.html',
  styleUrl: './attendance-list.scss'
})
export class AttendanceListComponent implements OnInit {
  attendance: Attendance[] = [];
  displayedColumns: string[] = ['employee_id', 'date', 'status', 'actions'];
  loading = false;

  constructor(
    private api: ApiService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadAttendance();
  }

  loadAttendance() {
    this.loading = true;
    this.api.getAttendance().subscribe(
      (data) => {
        this.attendance = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error loading attendance:', error);
        this.snackBar.open('Error loading attendance records', 'Close', { duration: 3000 });
        this.loading = false;
      }
    );
  }

  deleteAttendance(id: number) {
    if (confirm('Are you sure you want to delete this attendance record?')) {
      this.api.deleteAttendance(id).subscribe(
        () => {
          this.snackBar.open('Attendance record deleted successfully', 'Close', { duration: 2000 });
          this.loadAttendance();
        },
        (error) => {
          console.error('Error deleting attendance:', error);
          this.snackBar.open('Error deleting attendance record', 'Close', { duration: 3000 });
        }
      );
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'present': return '#4caf50';
      case 'absent': return '#f44336';
      case 'late': return '#ff9800';
      default: return '#999';
    }
  }
}
