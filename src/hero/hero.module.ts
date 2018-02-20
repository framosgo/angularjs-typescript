import { module } from 'angular';
import { HeroComponent } from './hero.component';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

export const moduleName = 'hero';

export const HeroModule = module(moduleName, [])
  .service(HeroService.serviceName, HeroService)
  .component(HeroComponent.selector, HeroComponent.component)
  .component(HeroesComponent.selector, HeroesComponent.component)
  .component(HeroDetailComponent.selector, HeroDetailComponent.component);