import * as angular from 'angular';

import { moduleName as appModuleName } from './app.module';

const moduleName = 'app';

angular.module(moduleName, [
  appModuleName
]);

angular.element(() => {
  angular.bootstrap(document, [moduleName]);
});