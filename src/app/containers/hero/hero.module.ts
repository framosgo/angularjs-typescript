import * as ng from 'angular';

import { HeroService } from './services/hero.service';

import { HeroComponent } from './hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { HeroDetailController } from './components/hero-detail/hero-detail.controller';
import { HeroController } from './hero.controller';
import { HeroesController } from './components/heroes/heroes.controller';

const name = 'hero';

const module: ng.IModule = ng.module(name, [])
  .service(HeroService.serviceName, HeroService)

  .component(HeroDetailComponent.selector, HeroDetailComponent.component)
  .controller(HeroDetailController.controllerName, HeroDetailController.$inject)

  .component(HeroComponent.selector, HeroComponent.component)
  .controller(HeroController.controllerName, HeroController.$inject)

  .component(HeroesComponent.selector, HeroesComponent.component)
  .controller(HeroesController.controllerName, HeroesController.$inject);

export const HeroModule = {
  name,
  module
}