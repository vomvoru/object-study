import TicketOffice from './TicketOffice';

export default class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {}

  getTicketOffice(): TicketOffice {
    return this.ticketOffice;
  }
}
