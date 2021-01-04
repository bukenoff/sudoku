import { IGrid, IBlock } from '~/types';
import { v4 as uuidv4 } from 'uuid';

export const SUDOKU_MATRIX_MOCK = [
  [4, 3, 5, 6, 8, 2, 1, 9, 7],
  [2, 6, 9, 5, 7, 1, 8, 3, 4],
  [7, 8, 1, 4, 9, 3, 5, 6, 2],
  [8, 2, 6, 3, 7, 4, 9, 5, 1],
  [1, 9, 5, 6, 8, 2, 7, 4, 3],
  [3, 4, 7, 9, 1, 5, 6, 2, 8],
  [5, 1, 9, 2, 4, 8, 7, 6, 3],
  [3, 2, 6, 9, 5, 7, 4, 1, 8],
  [8, 7, 4, 1, 3, 6, 2, 5, 9],
];

export const SUDOKU_GRID_MOCK = (): IGrid =>
  SUDOKU_MATRIX_MOCK.reduce((grid: any, current_block, current_block_index) => {
    grid[current_block_index + 1] = current_block.reduce(
      (block: any, current_digit, current_digit_index) => {
        block[current_digit_index + 1] = {
          id: uuidv4(),
          value: current_digit,
          is_resolved: !!Math.floor(Math.random() * 2),
          is_value_guessed: false,
        };

        return block;
      },
      {},
    );

    return grid;
  }, {});

export const fetchSudokiGrid = (): Promise<IGrid> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(SUDOKU_GRID_MOCK()), 1000),
  );
};
