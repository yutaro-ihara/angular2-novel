import {Expression} from './expression';
import {ExpressionType} from './expression.type';

class ExpressionImpl implements Expression {
  constructor(public expr: string, public type: ExpressionType) {}
}

export class ExpressionFactory {
  public static create(expr: string) {
    if (!expr || expr.indexOf('end') === 0) {
      return new ExpressionImpl(expr, ExpressionType.end);
    }
    if (expr.charAt(0) === ';') {
      return new ExpressionImpl(expr, ExpressionType.commentOut);
    }

    if (expr.charAt(0) === '@') {
      return new ExpressionImpl(expr, ExpressionType.expression);
    }

    if (expr.indexOf('ld') === 0) {
      let options: string[] = expr.substr(3).split(',');

      let type: ExpressionType;
      switch(Number(options[0])) {
        case 1:
          type = ExpressionType.rightCharactor;
          break;
        case -1:
          type = ExpressionType.leftCharactor;
          break;
        default:
          type = ExpressionType.end;
          break;
      }

      return new ExpressionImpl(options[1], type);
    }

    return new ExpressionImpl(expr, ExpressionType.text);
  }
}
