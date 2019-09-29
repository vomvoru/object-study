import { DiscountPolicy } from '../DiscountPolicy';
import { DiscountCondition } from '../DiscountCondition';
import { Money } from '../Money';

export class AmountDiscountPolicy extends DiscountPolicy {
  constructor(private discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
  }

  protected getDiscountAmount(): Money {
    return this.discountAmount;
  }
}
