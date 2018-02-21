import * as ng from 'angular';
import { HeroComponent } from './hero.component';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const name = 'hero';

const module = ng.module(name, [])
  .service(HeroService.serviceName, HeroService)
  .component(HeroComponent.selector, HeroComponent.component)
  .component(HeroesComponent.selector, HeroesComponent.component)
  .component(HeroDetailComponent.selector, HeroDetailComponent.component);

export const HeroModule = {
  name,
  module
}