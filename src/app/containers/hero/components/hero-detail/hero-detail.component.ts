import { IComponentOptions } from 'angular';
import { HeroDetailController } from './hero-detail.controller';

const component: IComponentOptions = {
  controller: HeroDetailController,
  controllerAs: 'vm',
  templateUrl: '../src/app/containers/hero/components/hero-detail/hero-detail.component.html',
  bindings: {
    hero: '<'
  }
}

export const HeroDetailComponent = {
  selector: 'heroDetail',
  component
}