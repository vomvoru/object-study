import { DiscountCondition } from './DiscountCondition';
import { Screening } from './Screening';
import { Money } from './Money';

export abstract class DiscountPolicy {
  constructor(private conditions: DiscountCondition[]) {}

  calculateDiscountAmount(screening: Screening) {
    if (this.conditions.some(condition => condition.isSatisfiedBy(screening))) {
      return this.getDiscountAmount(screening);
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(Screening: Screening): Money;
}
