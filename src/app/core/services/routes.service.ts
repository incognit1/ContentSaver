import { Injectable } from '@angular/core';
import { AppRoutes } from '../../shared/constants/routes';

/**
 * The use of route constants instead of literals in templates and routes reduces the enslavement of the system.
 */
@Injectable({
    providedIn: 'root',
})
export class RoutesService {
    readonly appRoutes = AppRoutes;

    constructor() {
    }
}
