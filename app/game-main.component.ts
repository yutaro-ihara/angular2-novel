import {Component, OnInit} from 'angular2/core';
import {ScenarioService} from './scenario.service';
import {Expression} from './expression';
import {ExpressionType} from './expression.type';


@Component({
  selector: 'game-main',
  template:`
    <div class="game-main">
      <div class="text-field" (click)="onClick()">
        <p *ngFor="#text of currentTexts">{{ text }}</p>
      </div>
      <img class="background-image" src="{{backgroundImage}}">
      <img class="left-position" src="{{leftCharactor}}">
      <img class="right-position" src="{{rightCharactor}}">
    </div>
  `,
  styles: [`
    .game-main {
      position: relative;
      height: 100%;
      width: 100%;
    }
    .text-field {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: left;
      color: white;
      z-index: 2;
    }
    .text-field > p {
      z-index: 3;
    }
    .left-position {
      position: absolute;
      height: 100%;
      width: 50%;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .right-position {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
      z-index: 1;
    }
    .background-image {
      width: 100%;
      height: 100%;
    }
  `]
})
export class GameMainComponent implements OnInit {
  public currentTexts: string[] = [];
  public leftCharactor: string;
  public rightCharactor: string;

  constructor(
    private _scenarioService: ScenarioService
  ) { }

  ngOnInit() {
    this.next();
  }

  onClick() {
    this.next();
  }

  next() {
    this._scenarioService.getNext().then((next: Expression) => {
      switch(next.type) {
        case ExpressionType.end:
          break;
        case ExpressionType.commentOut:
          this.next();
          break;
        case ExpressionType.expression:
          this.next();
          break;
        case ExpressionType.backgroundImage:
          break;
        case ExpressionType.leftCharactor:
          this.leftCharactor = next.expr;
          break;
        case ExpressionType.rightCharactor:
          this.rightCharactor = next.expr;
          break;
        default:
          this.currentTexts.push(next.expr);
      }
    }).catch(function(e) {
      console.log(e);
    });
  }
}
