import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface ConfirmDialogInterface { message: string; confirmBtnText: string; cancelBtnText: string; }

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.sass'],
})
export class ConfirmDialogComponent {
    public constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogInterface,
    ) {}

    public confirm(): void {
        this.dialogRef.close(true);
    }
}
