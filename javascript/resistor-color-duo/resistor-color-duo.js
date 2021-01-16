//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = (colorsList) => {
  const getDecodeValue = (colors) =>
    colors.map((color) => COLORS.indexOf(color)).join('');
  const withoutAdditionalColorList = colorsList.slice(0, 2);

  return Number(getDecodeValue(withoutAdditionalColorList));
};
