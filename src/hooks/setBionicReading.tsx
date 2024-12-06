export const setBionicReading = (text: string): string => {
	// Transform each word into a bionic reading HTML string
	const transformToBionic = (word: string): string => {
		const splitIndex = Math.ceil(word.length / 2); // Bionic reading bolds about half the word
		return `<b>${word.slice(0, splitIndex)}</b>${word.slice(splitIndex)}`;
	};

	// Split text into words, apply the transformation, and join with spaces
	return text.split(' ').map(transformToBionic).join(' ');
};
