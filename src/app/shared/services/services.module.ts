import * as ng from 'angular';
//import { loggerService } from './logger/logger.service';

const name = 'app.shared.services';

const module = ng.module(name, [
  
]);
//  .service(loggerService.name, loggerService.service)

export const SharedServicesModule = {
  name,
  module
}