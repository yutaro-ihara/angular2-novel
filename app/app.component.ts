import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Config} from './config';
import {ConfigService} from './config.service';
import {GameTitleComponent} from './game-title.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <game-title></game-title>
    <button (click)="onClickStart()" >Start</button>
  `,
  directives: [
    HeroDetailComponent,
    GameTitleComponent
  ],
  providers: [
    HeroService,
    ConfigService
  ]
})
export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;
  public config: Config;

  constructor(
    private _heroService: HeroService,
    private _configService: ConfigService
  ) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getConfig() {
    this._configService.getConfig().then(config => this.config = config);
  }

  ngOnInit() {
    this.getHeroes();
    this.getConfig();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }

  onClickStart() {
    alert('click');
  }
}
