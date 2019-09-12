import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoutesService } from '../../core/services/routes.service';

@Component({
    selector       : 'app-main-menu',
    templateUrl    : './main-menu.component.html',
    styleUrls      : [ './main-menu.component.sass' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit {
    constructor(
        public readonly routes: RoutesService,
    ) {
    }

    ngOnInit(): void {
    }

}
