import TicketOffice from './TicketOffice';
import Audience from './Audience';

export default class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {}

  sellTo(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketOffice.getTicket();
      audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketOffice.getTicket();
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketOffice.plusAmout(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}
