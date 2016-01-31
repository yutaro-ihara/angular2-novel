import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'game-title',
  template: `
    <div class="title-page" (click)="onClick()">
      <h2>{{ title }}</h2>
    </div>
  `,
  styles: [`
    h2 {
      text-align: center;
    }
    .title-page {
      width: 100%;
      height: 100%;
    }
  `]
})

export class GameTitleComponent implements OnInit {
  public title: string = 'title';

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.title = 'yokuwakaran';
  }

  onClick() {
    this._router.navigate(['GameMain']);
  }

};
