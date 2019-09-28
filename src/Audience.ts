import Bag from './Bag';
import Ticket from './Ticket';

export default class Audience {
  constructor(private bag: Bag) {}

  buy(ticket: Ticket) {
    if (this.bag.hasInvitation()) {
      this.bag.setTicket(ticket);
      return 0;
    }

    this.bag.setTicket(ticket);
    this.bag.minusAmount(ticket.getFee());
    return ticket.getFee();
  }
}
