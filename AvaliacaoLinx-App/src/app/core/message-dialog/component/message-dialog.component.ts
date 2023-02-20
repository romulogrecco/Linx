import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogResult } from '../models/dialog-result';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  constructor(
    public dialogResultRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogResult) { }

  ngOnInit() {
  }

  isConfirmDialog() {
    return (this.dialogData.dialogType == 'confirm');
  }
}