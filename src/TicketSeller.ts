import TicketOffice from './TicketOffice';
import Audience from './Audience';

export default class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {}

  sellTo(audience: Audience) {
    this.ticketOffice.sellTicketTo(audience);
  }
}
