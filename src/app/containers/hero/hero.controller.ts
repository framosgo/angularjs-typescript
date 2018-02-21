import { IOnChangesObject, IChangesObject, IComponentController } from "angular";
import { Hero } from "./models/Hero";
import { HeroService, IHeroService } from "./services/hero.service";

export class HeroController implements IComponentController {
  static readonly controllerName: string = 'HeroController';
  static readonly $inject: Array<string> = [HeroService.serviceName];

  heroes: Hero[];

  constructor(
    private heroService: IHeroService
  ) { }

  $onInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero): void {
    console.log('selected Hero:', hero.name);
  }
}