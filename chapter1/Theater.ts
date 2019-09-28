import TicketSeller from './TicketSeller';
import Audience from './Audience';

export default class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}
