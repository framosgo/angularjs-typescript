import { IComponentOptions } from 'angular';
import { HeroDetailController } from './hero-detail.controller';

const component: IComponentOptions = {
  controller: HeroDetailController,
  templateUrl: '../src/hero/components/hero-detail/hero-detail.component.html',
  bindings: {
    heroes: '<'
  }
}

export const HeroDetailComponent = {
  selector: 'hero-detail',
  component
}