import { Movie } from './Movie';
import { Money } from './Money';
import { Customer } from './Customer';
import { Reservation } from './Reservation';

export class Screening {
  constructor(private movie: Movie, private sequence: number, private whenScreened: Date) {}

  getStartTime(): Date {
    return this.whenScreened;
  }

  isSequence(sequence: number): boolean {
    return this.sequence === sequence;
  }

  getMovieFee(): Money {
    return this.movie.getFee();
  }

  reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}
