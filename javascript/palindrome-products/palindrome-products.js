//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  constructor(largest, smallest) {
    this.largest = largest;
    this.smallest = smallest;
  }

  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }

    const isPalindrom = (str) => {
      for (let i = 0; i < str.length; i += 1) {
        const fromBeginIndex = i;
        const fromEndIndex = str.length - i - 1;
        if (str[fromBeginIndex] !== str[fromEndIndex]) {
          return false;
        }
      }
      return true;
    };

    let res = {};

    for (let i = minFactor; i <= maxFactor; i += 1) {
      for (let j = minFactor; j <= maxFactor; j += 1) {
        const item = i * j;
        if (!res[item] && isPalindrom(item.toString())) {
          res = { ...res, [item]: { value: item, factors: [[i, j]] } };
        } else if (isPalindrom(item.toString())) {
          const factors = res[item].factors;
          const isSameFactors = factors.find(([a]) => a === j);
          !isSameFactors
            ? (res[item].factors = [...res[item].factors, [i, j]])
            : res;
        }
      }
    }

    const getPalindrom = (palindromes, value = 'largest') => {
      if (palindromes.length === 0) {
        return { value: null, factors: [] };
      }
      return value === 'smallest'
        ? palindromes[0]
        : palindromes[palindromes.length - 1];
    };

    const palindromes = Object.values(res);

    const largest = getPalindrom(palindromes);
    const smallest = getPalindrom(palindromes, 'smallest');

    return new this(largest, smallest);
  }
}
