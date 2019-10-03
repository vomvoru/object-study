import { Reservation } from './Reservation';
import { Screening } from './Screening';
import { Customer } from './Customer';
import { Movie } from './Movie';
import { DiscountConditionType } from './DiscountConditionType';
import { Money } from './Money';
import { MovieType } from './MovieType';

export class ReservationAgency {
  // eslint-disable-next-line class-methods-use-this
  reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
    const movie: Movie = screening.getMovie();

    const discountable: boolean = movie.getDiscountConditions().some(condition => {
      if (condition.getType() === DiscountConditionType.PERIOD) {
        return (
          screening.getWhenScreended().getTime() === condition.getDayOfWeek() &&
          condition.getStartTime() <= screening.getWhenScreended() &&
          condition.getEndTime() >= screening.getWhenScreended()
        );
      }
      return condition.getSequence() === screening.getSequence();
    });

    let fee: Money;
    if (discountable) {
      let discountAmount: Money = Money.ZERO;
      switch (movie.getMovieType()) {
        case MovieType.ACOUNT_DISCOUNT:
          discountAmount = movie.getDiscountAmount();
          break;
        case MovieType.PERCENT_DISCOUNT:
          discountAmount = movie.getFee().times(movie.getDiscountPercent());
          break;
        case MovieType.NONE_DISCOUNT:
          discountAmount = Money.ZERO;
          break;
        default:
          break;
      }

      fee = movie.getFee().minus(discountAmount);
    } else {
      fee = movie.getFee();
    }

    return new Reservation(customer, screening, fee, audienceCount);
  }
}
