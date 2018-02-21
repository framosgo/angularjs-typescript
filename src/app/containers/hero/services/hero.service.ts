import { Hero } from '../models/Hero';

import { HEROES } from './heroes.mock';

export interface IHeroService {
  getHeroes: () => Hero[]
}

export class HeroService implements IHeroService {
  static readonly serviceName: string = 'HeroService';
  static readonly $inject: Array<string> = [];

  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}