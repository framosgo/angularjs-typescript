import { IComponentOptions } from 'angular';
import { HeroesController } from './heroes.controller';

const component: IComponentOptions = {
  controller: HeroesController,
  templateUrl: '../src/hero/components/heroes/heroes.component.html',
  bindings: {
    heroes: '<'
  }
}

export const HeroesComponent = {
  selector: 'heroes',
  component
}