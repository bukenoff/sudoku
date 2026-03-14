import type { IGrid } from '~/types';

import { RESOLVED_CELLS_COUNT } from './sudoku';
import SudokuSolver from '~/sudoku-solver';

const b = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
] as (null | number)[][];

export const SUDOKU_GRID_MOCK = (
  difficulty: 'easy' | 'medium' | 'hard',
): IGrid => {
  let resolved_cells_left = RESOLVED_CELLS_COUNT[difficulty];
  const solver = new SudokuSolver(b);
  solver.solve();

  return solver
    .toBlocks()
    .reduce((grid: any, current_block, current_block_index) => {
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
            id: Math.random().toString(),
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
    }, {});
};
export const fetchSudokiGrid = (
  difficulty: 'easy' | 'medium' | 'hard',
): IGrid => {
  return SUDOKU_GRID_MOCK(difficulty);
};
