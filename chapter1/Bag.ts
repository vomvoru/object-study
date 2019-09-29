import { Invitation } from './Invitation';
import { Ticket } from './Ticket';

export class Bag {
  private amount: number;
  private invitation: Invitation;
  private ticket: Ticket;

  constructor(amount: number);
  constructor(invitation: Invitation, amount: number);
  constructor(invitationOrAmount: Invitation | number, amountOrUndefiend?: number) {
    let invitation: Invitation;
    let amount: number;

    if (typeof invitationOrAmount === 'number') {
      amount = invitationOrAmount;
      invitation = null;
    } else {
      amount = amountOrUndefiend;
      invitation = invitationOrAmount;
    }

    this.invitation = invitation;
    this.amount = amount;
  }

  hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    }

    this.setTicket(ticket);
    this.minusAmount(ticket.getFee());
    return ticket.getFee();
  }

  private hasInvitation(): boolean {
    return this.invitation !== null;
  }

  private hasTicket(): boolean {
    return this.ticket !== null;
  }

  private setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  private minusAmount(amount: number) {
    this.amount -= amount;
  }

  private plusAmount(amount: number) {
    this.amount += amount;
  }
}
