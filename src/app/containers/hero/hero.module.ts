import * as ng from 'angular';

import { HeroService } from './services/hero.service';

import { HeroComponent } from './hero.component';
import { HeroController } from './hero.controller';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesController } from './components/heroes/heroes.controller';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroDetailController } from './components/hero-detail/hero-detail.controller';

const name = 'hero';

const module: ng.IModule = ng.module(name, [])
  .service(HeroService.serviceName, HeroService)

  .component(HeroComponent.selector, HeroComponent.component)
  .controller(HeroController.controllerName, HeroController.$inject)

  .component(HeroDetailComponent.selector, HeroDetailComponent.component)
  .controller(HeroDetailController.controllerName, HeroDetailController.$inject)

  .component(HeroesComponent.selector, HeroesComponent.component)
  .controller(HeroesController.controllerName, HeroesController.$inject)


export const HeroModule = {
  name,
  module
}