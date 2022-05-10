import { IHero } from './../../models/hero.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() public hero?: IHero;
  @Output() public upDate: EventEmitter<void> = new EventEmitter();

  constructor() {}

  public opacity() {
    if (this.hero) {
      this.hero.isActive = !this.hero.isActive;
      this.upDate.emit();
    }
  }
}
