//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const dnaTorna = {
	'G': 'C',
	'C': 'G',
	'T': 'A',
  'A': 'U'
}

export const toRna = (rna) => {
	if (rna === '') {
		return '';
	}
	let res = '';
  for (let i = 0; i < rna.length; i += 1) {
    res += dnaTorna[rna[i]]
	}
	return res;
};
