import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FavoriteItemModel } from '../../../../shared/models/favorite-item.model';
import { FormControl } from '@angular/forms';
import { dbKeyId } from '../../../../shared/constants/symbols';

@Component({
    selector   : 'app-edit-favorite-dialog',
    templateUrl: './edit-favorite-dialog.component.html',
    styleUrls  : [ './edit-favorite-dialog.component.sass' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFavoriteDialogComponent implements OnInit {
    commentCtrl = new FormControl('');

    constructor(
        public dialogRef: MatDialogRef<EditFavoriteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: FavoriteItemModel,
    ) {
    }

    ngOnInit(): void {
        this.commentCtrl.setValue(this.data.comment);
    }

    edit(): void {
        this.dialogRef.close({
            ...this.data,
            comment: this.commentCtrl.value,
            [dbKeyId]: this.data[dbKeyId],
        });
    }
}
