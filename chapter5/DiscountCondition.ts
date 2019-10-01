import { Screening } from './Screening';
import { DiscountConditionType } from './DiscountConditionType';

export class DiscountCondition {
  constructor(
    private type: DiscountConditionType,
    private sequence: number,
    private dayOfWeek: number,
    private startTime: Date,
    private endTime: Date
  ) {}

  isSatisfiedBy(screening: Screening): boolean {
    if (this.type === DiscountConditionType.PERIOD) {
      return this.isStatisfiedByPeriod(screening);
    }

    return this.isStatisfiedBySequence(screening);
  }

  private isStatisfiedByPeriod(screening: Screening): boolean {
    return (
      this.dayOfWeek === screening.getWhenScreened().getDay() &&
      this.startTime.getTime() <= screening.getWhenScreened().getTime() &&
      this.endTime.getTime() >= screening.getWhenScreened().getTime()
    );
  }

  private isStatisfiedBySequence(screening: Screening): boolean {
    return screening.getSequence() === this.sequence;
  }
}
