import { IComponentController } from "angular";
import { Hero } from "../../models/Hero";

export class HeroDetailController implements IComponentController{
  static readonly controllerName: string = "HeroDetailController";
  static readonly $inject: Array<string> = [];

  hero: Hero;

  constructor() {}
}