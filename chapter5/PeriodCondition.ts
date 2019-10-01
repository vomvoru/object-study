import { Screening } from './Screening';
import { DiscountCondition } from './DiscountCondition';

export class PeriodCondition implements DiscountCondition {
  constructor(private dayOfWeek: number, private startTime: Date, private endTime: Date) {}

  isSatisfiedBy(screening: Screening): boolean {
    return (
      this.dayOfWeek === screening.getWhenScreened().getDay() &&
      this.startTime.getTime() <= screening.getWhenScreened().getTime() &&
      this.endTime.getTime() >= screening.getWhenScreened().getTime()
    );
  }
}
