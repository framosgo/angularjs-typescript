import * as ng from 'angular';
//import { TooltipComponent } from './tooltip.component';

const name = 'app.shared.components';

const module = ng.module(name, [

]);
//  .component(TooltipComponent.selector, TooltipComponent.component)

export const SharedComponentsModule = {
  name,
  module
}