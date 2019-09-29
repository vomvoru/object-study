import { DiscountCondition } from '../DiscountCondition';
import { Screening } from '../Screening';
import { Money } from '../Money';
import { DefaultDiscountPolicy } from './DefaultDiscountPolicy';

export class PercentDiscountPolicy extends DefaultDiscountPolicy {
  constructor(private percent: number, conditions: DiscountCondition[]) {
    super(conditions);
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}
