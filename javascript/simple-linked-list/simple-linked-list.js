//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, nextElem = null) {
    this._value = value;
    this._nextElem = nextElem;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._nextElem;
  }
}

export class List {
  constructor(value = []) {
    const data = value.reduce(
      (acc, item) => {
        if (!acc.next) {
          const element = new Element(item);
          acc = {
            next: element,
            elementList: [element, ...acc.elementList],
          };
        } else {
          const element = new Element(item, acc.next);
          acc = {
            next: element,
            elementList: [element, ...acc.elementList],
          };
        }
        return acc;
      },
      {
        next: null,
        elementList: [],
      }
    );
    this.list = data.elementList;
  }

  add(nextValue) {
    const head = this.list[0];
    const nextElement = new Element(nextValue.value, head);
    this.list = [nextElement, ...this.list];
  }

  get length() {
    return this.list.length;
  }

  get head() {
    return this.list.length !== 0 ? this.list[0] : null;
  }

  toArray() {
    return this.list.map((item) => item.value);
  }

  reverse() {
    const newArray = this.list.map((item) => item.value);
    return new List(newArray);
  }
}
