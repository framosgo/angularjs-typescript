import { IComponentOptions } from 'angular';
import { HeroesController } from './heroes.controller';

const component: IComponentOptions = {
  controller: HeroesController,
  controllerAs: 'vm',
  templateUrl: '../src/app/containers/hero/components/heroes/heroes.component.html',
  bindings: {
    heroes: '<'
  }
}

export const HeroesComponent = {
  selector: 'heroes',
  component
}