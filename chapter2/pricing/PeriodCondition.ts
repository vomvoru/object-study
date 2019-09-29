import { DiscountCondition } from '../DiscountCondition';
import { Screening } from '../Screening';

export class PeriodCondition implements DiscountCondition {
  constructor(private dayOfWeek: number, private startTime: Date, private endTime: Date) {}

  isSatisfiedBy(screening: Screening): boolean {
    return (
      screening.getStartTime().getDay() === this.dayOfWeek &&
      this.startTime.getTime() <= screening.getStartTime().getTime() &&
      this.endTime.getTime() >= screening.getStartTime().getTime()
    );
  }
}
