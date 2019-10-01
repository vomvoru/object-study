import { Screening } from './Screening';

export class SequenceCondition {
  constructor(private sequence: number) {}

  isSatisfiedBy(screening: Screening): boolean {
    return screening.getSequence() === this.sequence;
  }
}
