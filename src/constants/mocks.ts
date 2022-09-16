import { v4 as uuidv4 } from 'uuid';

import type { IGrid } from '~/types';

import { RESOLVED_CELLS_COUNT } from './sudoku';

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

export const SUDOKU_GRID_MOCK = (
  difficulty: 'easy' | 'medium' | 'hard',
): IGrid => {
  let resolved_cells_left = RESOLVED_CELLS_COUNT[difficulty];

  return SUDOKU_MATRIX_MOCK.reduce(
    (grid: any, current_block, current_block_index) => {
      grid[current_block_index + 1] = current_block.reduce(
        (block: any, current_digit, current_digit_index) => {
          let is_resolved = false;

          if (resolved_cells_left) {
            is_resolved = !!Math.floor(Math.random() * 2);
            if (is_resolved) {
              resolved_cells_left -= 1;
            }
          }

          block[current_digit_index + 1] = {
            id: uuidv4(),
            value: current_digit,
            is_resolved,
            is_value_guessed: false,
            guessed_value: 0,
            block_index: current_block_index + 1,
            cell_index: current_digit_index + 1,
          };

          return block;
        },
        {},
      );

      return grid;
    },
    {},
  );
};
export const fetchSudokiGrid = (
  difficulty: 'easy' | 'medium' | 'hard',
): Promise<IGrid> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(SUDOKU_GRID_MOCK(difficulty)), 1000),
  );
};
