import * as angular from 'angular';

import { HeroModule, moduleName as HeroModuleName } from './hero/hero.module';

export const moduleName = 'app.features';

angular.module(moduleName, [
  HeroModuleName
]);