import { DiscountCondition } from '../DiscountCondition';
import { Money } from '../Money';
import { DefaultDiscountPolicy } from './DefaultDiscountPolicy';

export class AmountDiscountPolicy extends DefaultDiscountPolicy {
  constructor(private discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
  }

  protected getDiscountAmount(): Money {
    return this.discountAmount;
  }
}
