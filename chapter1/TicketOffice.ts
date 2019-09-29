import { Ticket } from './Ticket';
import { Audience } from './Audience';

export class TicketOffice {
  constructor(private amount: number, private tickets: Ticket[]) {}

  sellTicketTo(audience: Audience) {
    this.plusAmout(audience.buy(this.getTicket()));
  }

  private getTicket(): Ticket {
    return this.tickets.pop();
  }

  private minusAmout(amount: number) {
    this.amount -= amount;
  }

  private plusAmout(amount: number) {
    this.amount += amount;
  }
}
