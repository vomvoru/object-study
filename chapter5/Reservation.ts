import { Customer } from './Customer';
import { Screening } from './Screening';
import { Money } from './Money';

export class Reservation {
  constructor(private customer: Customer, private screening: Screening, private fee: Money, private audienceCount: number) {}
}
