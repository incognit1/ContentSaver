import { ErrorHandler, Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class AlertService implements ErrorHandler {
    public constructor(
        private notifier: NotifierService,
    ) { }

    /**
     * Error handler.
     * Alert an error if there is one.
     * @param error
     * @returns {null}
     */
    handleError = (error: any) => {
        this.notifier.notify('error', `${ this.i18n('Ошибка') }! ${error ? error.message || error : ''}`);
        return null;
    }

    /**
     * Checks if there is no errors in the response body.
     * Alert an error if there is one.
     * @param response
     */
    public responseHasNoErrors(response: any): boolean {
        const errorText = this.getResponseErrorText(response);
        if (errorText.length) {
            this.notifier.notify( 'error', `${ this.i18n('Ошибка') }! ${errorText}`);
            return false;
        } else {
            return true;
        }
    }

    /**
     * Getting response text
     */
    public getResponseErrorText(response: any): string {
        if (response.error && response.error.message) {
            return response.error.message;
        } else {
            return '';
        }
    }

    /**
     * Showing new message
     * @param {string} message
     */
    public showDefaultMessage(message: string): void {
        this.notifier.notify('default', message);
    }

    public showErrorMessage(message: string): void {
        this.notifier.notify('error', message);
    }

    public showSuccessMessage(message: string): void {
        this.notifier.notify('success', message);
    }

    public showInfoMessage(message: string): void {
        this.notifier.notify('info', message);
    }
}
