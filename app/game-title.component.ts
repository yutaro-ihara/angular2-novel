import {Component, OnInit} from 'angular2/core';
import {Config} from './config';
import {CONFIG} from './mock-config';
@Component({
  selector: 'game-title',
  template: `
      <h2>{{conf.title}}</h2>
  `
})
export class GameTitleComponent implements OnInit {
  public conf: Config;

  ngOnInit() {
    this.conf = CONFIG;
  }
};
