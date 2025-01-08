import { useState, useMemo, useEffect } from 'react';
import '../maze.css';
import { generateMaze } from '../logic/maze_logic';

import { Rabbit, FlagCheckered } from '@phosphor-icons/react';
import {
	ArrowSquareUp,
	ArrowSquareDown,
	ArrowSquareLeft,
	ArrowSquareRight,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const MazeComponent = () => {
	const navigate = useNavigate();
	const [gameId, setGameId] = useState(1);
	const [status, setStatus] = useState('playing');

	const [size, setSize] = useState(10);

	const [userPosition, setUserPosition] = useState([0, 0]);

	// Generate the maze based on size and gameId
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const maze = useMemo(() => generateMaze(size, size), [size, gameId]);

	// Check if the user has won the game
	useEffect(() => {
		const lastRowIndex = maze.length - 1;
		const lastColIndex = maze[0].length - 1;
		if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
			setStatus('won');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userPosition[0], userPosition[1]]);

	// Dynamically generate class names based on cell position and walls
	const makeClassName = (i: number, j: number) => {
		const rows = maze.length;
		const cols = maze[0].length;
		const arr = [];
		if (maze[i][j][0] === 0) {
			arr.push('topWall');
		}
		if (maze[i][j][1] === 0) {
			arr.push('rightWall');
		}
		if (maze[i][j][2] === 0) {
			arr.push('bottomWall');
		}
		if (maze[i][j][3] === 0) {
			arr.push('leftWall');
		}
		if (i === rows - 1 && j === cols - 1) {
			arr.push('destination');
		}
		if (i === userPosition[0] && j === userPosition[1]) {
			arr.push('currentPosition');
		}

		return arr.join(' ');
	};

	// Handle keyboard navigation
	const handleMove = (e: React.KeyboardEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (status !== 'playing') return;

		const key = e.code;

		const [i, j] = userPosition;
		if ((key === 'ArrowUp' || key === 'KeyW') && maze[i][j][0] === 1) {
			setUserPosition([i - 1, j]);
		}
		if ((key === 'ArrowRight' || key === 'KeyD') && maze[i][j][1] === 1) {
			setUserPosition([i, j + 1]);
		}
		if ((key === 'ArrowDown' || key === 'KeyS') && maze[i][j][2] === 1) {
			setUserPosition([i + 1, j]);
		}
		if ((key === 'ArrowLeft' || key === 'KeyA') && maze[i][j][3] === 1) {
			setUserPosition([i, j - 1]);
		}
	};

	// Handle difficulty selection
	const handleSelectDifficulty = (selectedSize: number) => {
		setSize(selectedSize);
		setUserPosition([0, 0]);
		setStatus('playing');
		setGameId((prevId) => prevId + 1);
	};

	// Handle D-Pad navigation
	const handleArrowMove = (direction: 'up' | 'right' | 'down' | 'left'): void => {
		if (status !== 'playing') return;

		const [i, j] = userPosition;
		if (direction === 'up' && maze[i][j][0] === 1) setUserPosition([i - 1, j]);
		if (direction === 'right' && maze[i][j][1] === 1) setUserPosition([i, j + 1]);
		if (direction === 'down' && maze[i][j][2] === 1) setUserPosition([i + 1, j]);
		if (direction === 'left' && maze[i][j][3] === 1) setUserPosition([i, j - 1]);
	};

	return (
		<div className="map justify-center" onKeyDown={handleMove} tabIndex={-1}>
			<div>
				<h3 className="flex justify-center text-white text-xl font-medium mt-1 mb-1">
					Tap tap, pick now!
				</h3>
				<div className="flex justify-center space-x-4">
					<button className="button-89" onClick={() => handleSelectDifficulty(7)}>
						Tall
					</button>
					<button className="button-89" onClick={() => handleSelectDifficulty(13)}>
						Grande
					</button>
					<button className="button-89" onClick={() => handleSelectDifficulty(16)}>
						Venti
					</button>
				</div>
			</div>

			<div className="maze-container">
				<table id="maze">
					<tbody>
						{maze.map((row, i) => (
							<tr key={`row-${i}`}>
								{row.map((_, j) => {
									const isCurrentPosition =
										i === userPosition[0] && j === userPosition[1];
									const isDestination =
										i === maze.length - 1 && j === maze[0].length - 1;

									return (
										<td key={`cell-${i}-${j}`} className={makeClassName(i, j)}>
											{isCurrentPosition && (
												<Rabbit
													weight="duotone"
													size={16}
													color="hotpink"
												/>
											)}
											{isDestination && !isCurrentPosition && (
												<FlagCheckered size={20} color="springgreen" />
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p
				className={`flex justify-center text-center text-xl font-bold text-green-400 transition-opacity duration-300 ${
					status === 'playing' ? 'opacity-0' : 'opacity-100'
				}`}>
				Zoom zoom! Labyrinth conquered, hero human!
			</p>

			<div className="dpad-container">
				<button className="up" onClick={() => handleArrowMove('up')}>
					<ArrowSquareUp size={55} />
				</button>
				<button className="left" onClick={() => handleArrowMove('left')}>
					<ArrowSquareLeft size={55} />
				</button>
				<div className="center"></div>
				<button className="right" onClick={() => handleArrowMove('right')}>
					<ArrowSquareRight size={55} />
				</button>
				<button className="down" onClick={() => handleArrowMove('down')}>
					<ArrowSquareDown size={55} />
				</button>
			</div>

			<div className="flex justify-center space-x-4 mt-6">
				<button className="button-89" onClick={() => handleSelectDifficulty(size)}>
					Restart
				</button>
				<button className="button-89" onClick={() => navigate('/')}>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default MazeComponent;
