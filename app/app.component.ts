import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ScenarioService} from './scenario.service';
import {GameMainComponent} from './game-main.component';
import {GameTitleComponent} from './game-title.component';


@Component({
  selector: 'novel-app',
  template:`
    <h1>{{title}}</h1>
    <div class="main-view">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .main-view {
      background-color: black;
      width: 800px;
      height: 700px;
    }
    .main-view > * {
      width: 100%;
    }
    .main-view:after {
      display: block;
      clear: both;
      content: "";
    }
  `],
  providers: [ScenarioService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'GameTitle', component: GameTitleComponent, useAsDefault: true},
  {path:'/main', name: 'GameMain', component: GameMainComponent},
])
export class AppComponent implements OnInit {
  public title = 'Test Novel';

  constructor(
    private _scenarioService: ScenarioService
  ) { }

  ngOnInit() {

  }
}
