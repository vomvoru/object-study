import TicketSeller from './TicketSeller';
import Audience from './Audience';

export default class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  enter(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketSeller.getTicketOffice().plusAmout(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}
