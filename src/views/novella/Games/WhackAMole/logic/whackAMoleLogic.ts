export const getRandomPosition = (gridSize: number): number => {
	return Math.floor(Math.random() * gridSize);
};

export const calculateNewSpeed = (currentSpeed: number): number => {
	return Math.max(200, currentSpeed - 50);
};
