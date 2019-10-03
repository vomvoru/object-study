import { DiscountConditionType } from './DiscountConditionType';

export class DiscountCondition {
  private type: DiscountConditionType;

  private sequence: number;

  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  getType(): DiscountConditionType {
    return this.type;
  }

  setType(type: DiscountConditionType) {
    this.type = type;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  getDayOfWeek(): number {
    return this.dayOfWeek;
  }

  setDayOfWeek(dayOfWeek: number): void {
    this.dayOfWeek = dayOfWeek;
  }

  getStartTime(): Date {
    return this.startTime;
  }

  setStartTime(startTime: Date): void {
    this.startTime = startTime;
  }

  getEndTime(): Date {
    return this.endTime;
  }

  setEndTime(endTime: Date): void {
    this.endTime = endTime;
  }
}
