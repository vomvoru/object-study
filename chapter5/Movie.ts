import { Money } from './Money';
import { Screening } from './Screening';
import { MovieType } from './MovieType';
import { PeriodCondition } from './PeriodCondition';
import { SequenceCondition } from './SequenceCondition';

export class Movie {
  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  constructor(
    private title: string,
    private runningTime: number,
    private fee: Money,
    private periodConditions: PeriodCondition[],
    private sequenceConditions: SequenceCondition[]
  ) {}

  calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountAble(screening)) {
      return this.fee.minus(this.caclculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountAble(screening: Screening): boolean {
    return this.checkPeriodConditions(screening) || this.checkSequenceConditions(screening);
  }

  private checkPeriodConditions(screening: Screening): boolean {
    return this.periodConditions.some(discountCondition => discountCondition.isSatisfiedBy(screening));
  }

  private checkSequenceConditions(screening: Screening): boolean {
    return this.sequenceConditions.some(discountCondition => discountCondition.isSatisfiedBy(screening));
  }

  private caclculateDiscountAmount(): Money {
    switch (this.movieType) {
      case MovieType.AMOUNT_DISCOUNT:
        return this.caclculateAmountDiscountAmount();
      case MovieType.PERCENT_DISCOUNT:
        return this.caclculatePercentDiscountAmount();

      case MovieType.NONE_DISCOUNT:
        return this.caclculateNoneDiscountAmount();
      default:
        return this.fee;
    }
  }

  private caclculateAmountDiscountAmount(): Money {
    return this.discountAmount;
  }

  private caclculatePercentDiscountAmount(): Money {
    return this.fee.times(this.discountPercent);
  }

  // eslint-disable-next-line class-methods-use-this
  private caclculateNoneDiscountAmount(): Money {
    return Money.ZERO;
  }
}
