import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({ 
  templateUrl: './dialog2.html',
  styleUrls: ['./dialog2.css']
})
export class Dialog2Component {
  constructor(public dialogRef: MatDialogRef<Dialog2Component>,@Inject(MAT_DIALOG_DATA) public data: any) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  
}