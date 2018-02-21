import { IComponentOptions } from "angular";
import { HeroController } from "./hero.controller";

const component: IComponentOptions = {
  controller: HeroController,
  templateUrl: '../src/hero/hero.component.html',
}

export const HeroComponent = {
  selector: 'hero',
  component
}

