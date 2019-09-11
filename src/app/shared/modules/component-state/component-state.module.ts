import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { StateComponent } from './component-state.component';

@NgModule({
    declarations: [
        StateComponent,
    ],
    imports     : [
        CommonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports     : [
        StateComponent,
    ],
})
export class ComponentStateModule {
}
