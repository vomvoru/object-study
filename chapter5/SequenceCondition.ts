import { Screening } from './Screening';
import { DiscountCondition } from './DiscountCondition';

export class SequenceCondition implements DiscountCondition {
  constructor(private sequence: number) {}

  isSatisfiedBy(screening: Screening): boolean {
    return screening.getSequence() === this.sequence;
  }
}
