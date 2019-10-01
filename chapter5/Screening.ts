import { Reservation } from './Reservation';
import { Customer } from './Customer';
import { Movie } from './Movie';
import { Money } from './Money';

export class Screening {
  constructor(private movie: Movie, private sequence: number, private whenScreened: Date) {}

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  getSequence() {
    return this.sequence;
  }

  getWhenScreened() {
    return this.whenScreened;
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}
