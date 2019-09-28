import Invitation from './Invitation';
import Ticket from './Ticket';

export default class Bag {
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

  hasInvitation(): boolean {
    return this.invitation !== null;
  }

  hasTicket(): boolean {
    return this.ticket !== null;
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}
