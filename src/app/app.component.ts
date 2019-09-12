import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertService } from './core/services/alert.service';
import { timer } from 'rxjs';
import { SECOND } from './shared/constants/common';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.sass' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'content-saver';
    
    constructor(private alert: AlertService) {
        this.welcome();
    }
    
    welcome(): void {
        timer(SECOND).subscribe(() => this.alert.showDefaultMessage('Welcome to system, glad to see you!'));
    }
}
