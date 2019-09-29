import { Money } from '../Money';
import { DiscountPolicy } from '../DiscountPolicy';

export class NoneDiscountPolicy implements DiscountPolicy {
  // eslint-disable-next-line class-methods-use-this
  calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}
