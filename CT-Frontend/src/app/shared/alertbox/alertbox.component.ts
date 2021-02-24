import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.scss']
})
export class AlertboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertboxComponent>) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.dialogRef.close('Delete');
  }

}
