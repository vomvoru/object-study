export class Money {
  static ZERO = Money.wons(0);

  static wons(amount: number) {
    return new Money(amount);
  }

  constructor(private amount: number) {}

  plus(amount: Money): Money {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money): Money {
    return new Money(this.amount - amount.amount);
  }

  times(percent: number): Money {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money): boolean {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money): boolean {
    return this.amount >= other.amount;
  }
}
