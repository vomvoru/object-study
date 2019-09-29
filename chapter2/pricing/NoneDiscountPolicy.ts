import { Money } from '../Money';
import { DiscountPolicy } from '../DiscountPolicy';

export class NoneDiscountPolicy extends DiscountPolicy {
  // eslint-disable-next-line class-methods-use-this
  protected getDiscountAmount(): Money {
    return Money.ZERO;
  }
}
