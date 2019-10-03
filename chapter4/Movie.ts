import { Money } from './Money';

import { MovieType } from './MovieType';
import { DiscountCondition } from './DiscountCondition';

export class Movie {
  private title: string;
  private runningtime: number;
  private fee: Money;
  private discountConditions: DiscountCondition[];

  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  getMovieType(): MovieType {
    return this.movieType;
  }

  setMovieType(movieType: MovieType): void {
    this.movieType = movieType;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  getDiscountConditions(): DiscountCondition[] {
    return this.discountConditions;
  }

  setDiscountConditions(discountConditions: DiscountCondition[]): void {
    this.discountConditions = discountConditions;
  }

  getDiscountAmount(): Money {
    return this.discountAmount;
  }

  setDiscountAmount(discountAmount: Money): void {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discountPercent;
  }

  setDiscountPercent(discountPercent: number): void {
    this.discountPercent = discountPercent;
  }
}
