import Ticket from './Ticket';

export default class TicketOffice {
  constructor(private amount: number, private tickets: Ticket[]) {}

  getTicket(): Ticket {
    return this.tickets.pop();
  }

  minusAmout(amount: number) {
    this.amount -= amount;
  }

  plusAmout(amount: number) {
    this.amount += amount;
  }
}
