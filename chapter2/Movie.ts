import { Money } from './Money';
import { DiscountPolicy } from './DiscountPolicy';
import { Screening } from './Screening';

export class Movie {
  constructor(private title: string, private runningTime: number, private fee: Money, private discountPolicy: DiscountPolicy) {}

  getFee(): Money {
    return this.fee;
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
  }
}
