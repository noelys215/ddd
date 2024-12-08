export const setBionicReading = (text: string): string => {
	const transformToBionic = (word: string): string => {
		const splitIndex = Math.ceil(word.length / 2); // Bold the first half
		return `<strong style="font-weight: 700; color: #ffffff;">${word.slice(
			0,
			splitIndex
		)}</strong><span style="color: rgba(255, 255, 255, 0.8);">${word.slice(splitIndex)}</span>`;
	};
	return text.split(' ').map(transformToBionic).join(' ');
};
