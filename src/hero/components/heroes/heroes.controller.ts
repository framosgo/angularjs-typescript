import { IOnChangesObject, IChangesObject } from "angular";
import { Hero } from "../../models/Hero";

class Changes implements IOnChangesObject {
  [key: string]: ng.IChangesObject<any>;

  heroes: IChangesObject<Hero[]>;
}

export class HeroesController {
  static readonly $inject: Array<string> = [];

  heroes: Hero[];

  constructor() {}

  $onChanges(changes: Changes): void {
    console.log("onChange heroes", changes.heroes);
  }
}