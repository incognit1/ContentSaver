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
        this.notifier.notify('error', `'Ошибка!' ${error ? error.message || error : ''}`);
        return null;
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
