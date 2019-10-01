import { Money } from './Money';
import { DiscountCondition } from './DiscountCondition';
import { Movie } from './Movie';

export class AmountDiscountMovie extends Movie {
  constructor(title: string, runningTime: number, fee: Money, discountConditions: DiscountCondition[], private discountAmount: Money) {
    super(title, runningTime, fee, discountConditions);
  }

  protected caclculateDiscountAmount(): Money {
    return this.discountAmount;
  }
}
