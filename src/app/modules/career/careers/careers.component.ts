import { CareersService } from './../../../services/careers/careers.service';
import { Career } from './../../../model/career/career.model';
import { CareersCreateDialogComponent } from './careers-create-dialog/careers-create-dialog.component';
import { CareersEditDialogComponent } from './careers-edit-dialog/careers-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  careers: Array<Career>;
  loading: boolean;

  constructor(private careersService: CareersService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCareers();
  }

  backToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  newCareer() {
    const dialogRef = this.dialog.open(CareersCreateDialogComponent, {
      width: '500px',
      data: {},
      disableClose: false,
      hasBackdrop: true
    });

    dialogRef.afterClosed().toPromise()
      .then(data => this.getAllCareers());
  }

  openEditDialog($event) {
    const career = $event.data;
    const dialogRef = this.dialog.open(CareersEditDialogComponent, {
      width: '400px',
      data: {career},
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().toPromise()
      .then(data => {
        this.getAllCareers();
      });
  }

  private getAllCareers() {
    this.loading = true;
    this.careersService.getAllCareers()
      .then(c => {
        this.careers = c;
        this.loading = false;
      });
  }
}
