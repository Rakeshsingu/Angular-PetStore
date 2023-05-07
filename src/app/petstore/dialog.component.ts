import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({ 
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css']
})
export class DialogComponent {
  isDirty = false;
  update = false;
  updatedData: any = {};
  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.updatedData = { ...data };
  }

  closeDialog(): void {
    this.dialogRef.close(this.updatedData);
    this.update = true;
  }
  closeDialog1(): void {
    this.dialogRef.close();
    this.update = true;
  }
  onInputChange(): void {
    this.isDirty = true;
  }
  

  
}
