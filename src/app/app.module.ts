import * as angular from 'angular';
import { ContainersModule } from './containers/containers.module';
import { SharedModule } from './shared/shared.module';

const name = 'app';

const module = angular.module(name, [
  SharedModule.name,
  ContainersModule.name
]);

export const AppModule = {
  name,
  module
}