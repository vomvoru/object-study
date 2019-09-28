import Bag from './Bag';

export default class Audience {
  constructor(private bag: Bag) {}

  getBag(): Bag {
    return this.bag;
  }
}
