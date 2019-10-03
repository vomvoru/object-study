import { Movie } from './Movie';
import { Money } from './Money';
import { MovieType } from './MovieType';

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreended: Date;

  calculateDiscountFee(discountable: boolean, audienceCount: number): Money {
    if (discountable) {
      return this.movie
        .getFee()
        .minus(this.calculateDiscountedFee(this.movie))
        .times(audienceCount);
    }

    return this.movie.getFee().times(audienceCount);
  }

  private calculateDiscountedFee(movie: Movie): Money {
    switch (movie.getMovieType()) {
      case MovieType.ACOUNT_DISCOUNT:
        return this.calculateAmountDiscountedFee(movie);
      case MovieType.PERCENT_DISCOUNT:
        return this.calculatePercentDiscountedFee(movie);
      case MovieType.NONE_DISCOUNT:
        return this.calculateNoneDiscountedFee();
      default:
        return this.calculateNoneDiscountedFee();
    }
  }

  private calculateAmountDiscountedFee(movie: Movie): Money {
    return movie.getDiscountAmount();
  }

  private calculatePercentDiscountedFee(movie: Movie): Money {
    return movie.getFee().times(movie.getDiscountPercent());
  }

  private calculateNoneDiscountedFee(): Money {
    return Money.ZERO;
  }

  isDiscountable(): boolean {
    return this.movie.getDiscountConditions().some(condition => condition.isDiscountable(this));
  }

  getMovie(): Movie {
    return this.movie;
  }

  setMovie(movie: Movie): void {
    this.movie = movie;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  getWhenScreended(): Date {
    return this.whenScreended;
  }

  setWhenScreended(whenScreended: Date): void {
    this.whenScreended = whenScreended;
  }
}
