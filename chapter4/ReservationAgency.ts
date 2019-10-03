import { Reservation } from './Reservation';
import { Screening } from './Screening';
import { Customer } from './Customer';
import { Money } from './Money';

export class ReservationAgency {
  reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
    const discountable: boolean = this.checkDiscountable(screening);
    const fee: Money = screening.calculateDiscountFee(discountable, audienceCount);
    return this.createReservation(customer, screening, fee, audienceCount);
  }

  private checkDiscountable(screening: Screening): boolean {
    return screening.isDiscountable();
  }

  private createReservation(customer: Customer, screening: Screening, fee: Money, audienceCount: number) {
    return new Reservation(customer, screening, fee, audienceCount);
  }
}
