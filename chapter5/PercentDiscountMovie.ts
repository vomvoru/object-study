import { Money } from './Money';
import { DiscountCondition } from './DiscountCondition';
import { Movie } from './Movie';

export class PercentDiscountMovie extends Movie {
  constructor(title: string, runningTime: number, fee: Money, discountConditions: DiscountCondition[], private percent: number) {
    super(title, runningTime, fee, discountConditions);
  }

  protected caclculateDiscountAmount(): Money {
    return this.getFee().times(this.percent);
  }
}
