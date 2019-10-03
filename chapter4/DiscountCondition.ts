import { DiscountConditionType } from './DiscountConditionType';
import { Screening } from './Screening';

export class DiscountCondition {
  private type: DiscountConditionType;

  private sequence: number;

  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  isDiscountable(screening: Screening): boolean {
    if (this.type === DiscountConditionType.PERIOD) {
      return this.isSatisfiedByPeriod(screening);
    }
    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedByPeriod(screening: Screening): boolean {
    return (
      screening.getWhenScreended().getTime() === this.dayOfWeek &&
      this.startTime <= screening.getWhenScreended() &&
      this.endTime >= screening.getWhenScreended()
    );
  }

  private isSatisfiedBySequence(screening: Screening): boolean {
    return this.sequence === screening.getSequence();
  }
}
