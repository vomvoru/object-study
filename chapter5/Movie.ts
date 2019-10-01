import { Money } from './Money';
import { Screening } from './Screening';
import { DiscountCondition } from './DiscountCondition';

export abstract class Movie {
  constructor(private title: string, private runningTime: number, private fee: Money, private discountConditions: DiscountCondition[]) {}

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountAble(screening)) {
      return this.fee.minus(this.caclculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountAble(screening: Screening): boolean {
    return this.discountConditions.some(discountCondition => discountCondition.isSatisfiedBy(screening));
  }

  protected getFee(): Money {
    return this.fee;
  }

  protected abstract caclculateDiscountAmount(): Money;
}
