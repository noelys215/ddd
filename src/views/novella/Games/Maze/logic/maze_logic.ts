/**
 *
 * @param {number} x - width of maze
 * @param {number} y  - height of maze
 * Cell value: maze[i][j][n] is 0 (has wall) or 1 (no wall)
 * n == 0: north wall, n == 1: east wall
 * n == 2: south wall, n == 3: west wall
 *
 */

type Cell = [number, number, number, number];
type Maze = Cell[][];
type Position = [number, number];

export function generateMaze(x: number, y: number): Maze {
	const totalCells = x * y;
	const maze: Maze = [];
	const unvisited: boolean[][] = [];

	for (let i = 0; i < y; i++) {
		maze[i] = [];
		unvisited[i] = [];
		for (let j = 0; j < x; j++) {
			maze[i][j] = [0, 0, 0, 0];
			unvisited[i][j] = true;
		}
	}

	let currentCell: Position = [Math.floor(Math.random() * y), Math.floor(Math.random() * x)];
	const path: Position[] = [currentCell];
	unvisited[currentCell[0]][currentCell[1]] = false;
	let visited = 1;

	while (visited < totalCells) {
		const pot: [number, number, number, number][] = [
			[currentCell[0] - 1, currentCell[1], 0, 2],
			[currentCell[0], currentCell[1] + 1, 1, 3],
			[currentCell[0] + 1, currentCell[1], 2, 0],
			[currentCell[0], currentCell[1] - 1, 3, 1],
		];
		const neighbors: [number, number, number, number][] = [];

		for (const neighbor of pot) {
			const [nx, ny] = neighbor;
			if (nx >= 0 && nx < y && ny >= 0 && ny < x && unvisited[nx][ny]) {
				neighbors.push(neighbor);
			}
		}

		if (neighbors.length) {
			const next = neighbors[Math.floor(Math.random() * neighbors.length)];
			maze[currentCell[0]][currentCell[1]][next[2]] = 1;
			maze[next[0]][next[1]][next[3]] = 1;
			unvisited[next[0]][next[1]] = false;
			visited++;
			currentCell = [next[0], next[1]];
			path.push(currentCell);
		} else {
			currentCell = path.pop() as Position;
		}
	}

	return maze;
}

export function solve(
	maze: Maze,
	startX = 0,
	startY = 0,
	endX = maze.length - 1,
	endY = maze[0].length - 1
): Position[] {
	const visited: boolean[][] = Array.from({ length: maze.length }, () =>
		Array(maze[0].length).fill(false)
	);

	const solution: Position[] = [];
	let currentX = startX;
	let currentY = startY;

	while (currentX !== endX || currentY !== endY) {
		visited[currentX][currentY] = true;

		const options = getOptions(currentX, currentY, maze, visited);
		if (options.length === 0) {
			[currentX, currentY] = solution.pop() as Position;
		} else {
			solution.push([currentX, currentY]);
			[currentX, currentY] = options[0];
		}
	}

	solution.push([currentX, currentY]);
	return solution;
}

/*
 * Gets all of the cells we can possibly go to next.
 */
function getOptions(x: number, y: number, maze: Maze, visited: boolean[][]): Position[] {
	const options: Position[] = [];
	const cell = maze[x][y];
	const rows = maze.length;
	const cols = maze[0].length;

	if (x + 1 < rows && !visited[x + 1][y] && cell[2] === 1) {
		options.push([x + 1, y]);
	}
	if (y + 1 < cols && !visited[x][y + 1] && cell[1] === 1) {
		options.push([x, y + 1]);
	}
	if (y - 1 >= 0 && !visited[x][y - 1] && cell[3] === 1) {
		options.push([x, y - 1]);
	}
	if (x - 1 >= 0 && !visited[x - 1][y] && cell[0] === 1) {
		options.push([x - 1, y]);
	}

	return options;
}
