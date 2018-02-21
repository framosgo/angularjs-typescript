import { IComponentOptions } from "angular";
import { HeroController } from "./hero.controller";

const component: IComponentOptions = {
  controller: HeroController,
  controllerAs: 'vm',
  templateUrl: '../src/app/containers/hero/hero.component.html',
}

export const HeroComponent = {
  selector: 'hero',
  component
}

