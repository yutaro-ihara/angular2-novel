import {Injectable} from 'angular2/core';
import {SCENARIOS} from './mock-scenario';
import {Expression} from './expression';
import {ExpressionFactory} from './expression.factory';
import {ExpressionType} from './expression.type';

@Injectable()
export class ScenarioService {
  public scenarios: string[] = SCENARIOS.split('\n');

  getDefines() {
  }
  getNext() {
    return Promise.resolve(this.next());
  }
  next(): Expression {
    let nextLine = this.scenarios.shift();
    let expr = ExpressionFactory.create(nextLine);

    return expr;
  }
}
