//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Allergies {
  constructor(score) {
    this.score = score;
    this.alergiList = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ];
    this.currentAlergiList = [];

    const scoreToBinary = score.toString(2).split('').reverse();
    let res = [];

    for (let i = 0; i < scoreToBinary.length; i += 1) {
      const binaryElement = scoreToBinary[i];

      if (binaryElement === '1') {
        res = [...res, this.alergiList[i]];
      }
    }

    this.currentAlergiList = res.filter((i) => !!i);
  }

  list() {
    return this.currentAlergiList;
  }

  allergicTo(value) {
    return this.currentAlergiList.includes(value);
  }
}
