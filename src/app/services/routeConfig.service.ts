import { InjectionToken } from '@angular/core';
import { RouteConfig } from './route.config';

export const routeConfigToken = new InjectionToken<RouteConfig>('routeConfig');
