import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector   : 'app-provider-page',
    templateUrl: './provider-page.component.html',
    styleUrls  : [ './provider-page.component.sass' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderPageComponent {
}
