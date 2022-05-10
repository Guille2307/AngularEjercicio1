import { heroes } from './heroes-list.config';
import { IHero } from './models/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  public heroes: IHero[] = heroes;
  public heroCount: number = 0;

  public OnSelect() {
    this.heroCount = this.heroes.filter((hero) => {
      return hero.isActive;
    }).length;
  }

  constructor() {}
}
