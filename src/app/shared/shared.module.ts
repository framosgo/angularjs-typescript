import * as ng from 'angular';
import { SharedComponentsModule } from './components/components.module';
import { SharedServicesModule } from './services/services.module';

const name = 'app.shared';

const module = ng.module(name, [
  SharedComponentsModule.name,
  SharedServicesModule.name
]);

export const SharedModule = {
  name,
  module
}