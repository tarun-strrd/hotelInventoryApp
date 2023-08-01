import { Inject, Injectable } from '@angular/core';
import { routeConfigToken } from './routeConfig.service';
import { RouteConfig } from './route.config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(routeConfigToken) private configToken: RouteConfig) {
    console.log('config service');
    console.log(this.configToken);
  }
}
