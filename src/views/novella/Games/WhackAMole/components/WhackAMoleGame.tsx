// Games/WhackAMole/components/WhackAMoleGame.tsx
import { Rabbit } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';
import '../WhackAMole.css';
import { useNavigate } from 'react-router-dom';

const WhackAMoleGame: React.FC = () => {
	const navigate = useNavigate();
	const [score, setScore] = useState(0);
	const [rabbitPosition, setRabbitPosition] = useState<number>(-1); // -1 indicates no rabbit on the grid
	const [speed, setSpeed] = useState(1000); // Initial speed (1 second)

	useEffect(() => {
		const interval = setInterval(() => {
			moveRabbit();
		}, speed);

		return () => clearInterval(interval);
	}, [speed]);

	const moveRabbit = () => {
		const newPosition = Math.floor(Math.random() * 9); // 3x3 grid has 9 cells
		setRabbitPosition(newPosition);
	};

	const handleRabbitClick = () => {
		setScore(score + 1);
		setSpeed((prevSpeed) => Math.max(200, prevSpeed - 50)); // Increase speed (minimum 200ms)
		setRabbitPosition(-1); // Remove rabbit immediately after a click
	};

	const handleMissClick = () => {
		setScore((prevScore) => Math.max(0, prevScore - 1)); // Deduct a point if no rabbit, but don't go below 0
	};

	const resetGame = () => {
		setScore(0);
		setSpeed(1000);
		setRabbitPosition(-1);
	};

	return (
		<div className="w-full max-w-[400px] mx-auto flex flex-col items-center">
			<h1 className="text-xl font-bold m-2 text-pink-400 high-score">High Score: {score}</h1>
			<div className="grid grid-cols-3 gap-2 w-full aspect-square mb-4">
				{Array.from({ length: 9 }, (_, index) => (
					<div
						key={index}
						onClick={rabbitPosition !== index ? handleMissClick : undefined} // Handle miss clicks
						className={`relative border bg-gray-800 rounded-full flex items-center justify-center h-20 w-20 m-auto cursor-pointer hover:bg-gray-600 shadow-inner shadow-black hover:shadow-gray-700`}>
						{rabbitPosition === index && (
							<div
								onClick={handleRabbitClick}
								className="w-full h-full rounded-full justify-center items-center flex">
								<Rabbit weight="fill" className="text-white w-12 h-12 pulse" />
							</div>
						)}
					</div>
				))}
			</div>
			<div className="flex justify-center space-x-4 mt-6">
				<button onClick={resetGame} className="button-89">
					Reset Game
				</button>
				<button className="button-89" onClick={() => navigate('/')}>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default WhackAMoleGame;