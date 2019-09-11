import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

const COMPONENTS = [
    ConfirmDialogComponent,
];

@NgModule({
    declarations   : [
        ...COMPONENTS,
    ],
    imports        : [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
    ],
    entryComponents: [
        ConfirmDialogComponent,
    ],
    exports        : [
        ...COMPONENTS,
    ],
})
export class CustomComponentsModule {
}
