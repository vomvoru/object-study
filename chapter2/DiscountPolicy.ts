import { Screening } from './Screening';
import { Money } from './Money';

export interface DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money;
}
