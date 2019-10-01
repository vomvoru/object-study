import { Money } from './Money';
import { DiscountPolicy } from './DiscountPolicy';
import { Screening } from './Screening';

export class Movie {
  private discountPolicy: DiscountPolicy;

  constructor(private title: string, private runningTime: number, private fee: Money, discountPolicy: DiscountPolicy) {
    this.setDiscountPolicy(discountPolicy);
  }

  getFee(): Money {
    return this.fee;
  }

  setDiscountPolicy(discountPolicy: DiscountPolicy) {
    this.discountPolicy = discountPolicy;
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
  }
}
