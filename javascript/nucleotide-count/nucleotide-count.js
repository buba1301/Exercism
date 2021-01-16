//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { error } from 'console';

export class NucleotideCounts {
  static parse(value) {
    if (value === '') {
      return '0 0 0 0';
    }
    const valueToArray = value.split('');

    const nucleotidesCounteTable = valueToArray.reduce(
      (acc, item) => {
        const nucleotideCount = acc[item];

        const nucleotides = Object.keys(acc);

        const isNucleotide = nucleotides.includes(item);

        if (!isNucleotide) {
          throw new Error('Invalid nucleotide in strand');
        }

        return { ...acc, [item]: nucleotideCount + 1 };
      },
      {
        A: 0,
        C: 0,
        G: 0,
        T: 0,
      }
    );

    return Object.values(nucleotidesCounteTable).join(' ');
  }
}
