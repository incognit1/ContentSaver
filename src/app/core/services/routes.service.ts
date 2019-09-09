import { Injectable } from '@angular/core';
import { AppRoutes } from '../../shared/constants/routes';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  readonly appRoutes = AppRoutes;
  constructor() {
  }
}
