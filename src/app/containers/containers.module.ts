import * as ng from 'angular';

import { HeroModule } from './hero/hero.module';

const name = 'app.containers';

const module = ng.module(name, [
  HeroModule.name
]);

export const ContainersModule = {
  name,
  module
}