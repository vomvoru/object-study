import { Money } from './Money';
import { Movie } from './Movie';

export class NoneDiscountMovie extends Movie {
  // eslint-disable-next-line class-methods-use-this
  protected caclculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}
