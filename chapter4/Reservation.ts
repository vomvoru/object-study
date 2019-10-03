import { Customer } from './Customer';
import { Screening } from './Screening';
import { Money } from './Money';

export class Reservation {
  constructor(private customer: Customer, private screening: Screening, private fee: Money, private audienceCount: number) {}

  getCustomer(): Customer {
    return this.customer;
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  getScreening(): Screening {
    return this.screening;
  }

  setScreening(screening: Screening): void {
    this.screening = screening;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  getAudienceCount(): number {
    return this.audienceCount;
  }

  setAudienceCount(audienceCount: number): void {
    this.audienceCount = audienceCount;
  }
}
