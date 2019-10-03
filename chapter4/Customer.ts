export class Customer {
  constructor(private name: string, private id: string) {}

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }
}
