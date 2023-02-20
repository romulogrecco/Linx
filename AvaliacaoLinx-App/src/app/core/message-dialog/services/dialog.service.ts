import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../component/message-dialog.component';

@Injectable()
export class DialogService {

  constructor(public dialog : MatDialog) { }

  showInfoMessage(message: string) : any {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        dialogTitle: 'Informação',
        dialogType: 'info',
        dialogMessage: message
      }
    });

    return dialogRef.afterClosed();
  }

  showAvisoMessage(message: string) : any {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        dialogTitle: 'Aviso',
        dialogType: 'warn',
        dialogMessage: message
      }
    });

    return dialogRef.afterClosed();
  }

  showConfirmMessage(message: string) : any {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        dialogTitle: 'Confirmação',
        dialogType: 'confirm',
        dialogMessage: message
      }
    });

    return dialogRef.afterClosed();
  }

  showErrorMessage(message: string) : any {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        dialogTitle: 'Erro',
        dialogType: 'error',
        dialogMessage: message
      }
    });

    return dialogRef.afterClosed();
  }
}