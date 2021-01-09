//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.active = false;
    this.b = 0;
  }

  open() {
    if (!this.active) {
      this.active = true;
      this.b = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.active) {
      this.active = false;
    } else {
      throw new ValueError();
    }
  }

  deposit(value) {
    if (this.active && value > 0) {
      this.b += value;
    } else {
      throw new ValueError();
    }
  }

  withdraw(value) {
    if (this.active && value <= this.b && value > 0) {
      this.b -= value;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.active) {
      return this.b;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
