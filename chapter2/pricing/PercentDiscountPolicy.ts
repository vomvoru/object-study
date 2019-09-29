import { DiscountCondition } from '../DiscountCondition';
import { DiscountPolicy } from '../DiscountPolicy';
import { Screening } from '../Screening';
import { Money } from '../Money';

export class PercentDiscountPolicy extends DiscountPolicy {
  constructor(private percent: number, conditions: DiscountCondition[]) {
    super(conditions);
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}
