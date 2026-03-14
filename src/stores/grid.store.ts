import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { TOTAL_CELLS_COUNT, fetchSudokiGrid } from '~/constants';
import type { CellIndexType, ICell, IGrid } from '~/types';

import { useTimer } from './timer.store';

interface GridStore {
  grid: IGrid;
  is_fetching: boolean;
  mistakes_count: number;
  unresolved_count: number;
  is_resolved: boolean;
  checkIfResolved: VoidFunction;
  fetchGrid: VoidFunction;
  setGuessedValue: (
    block_index: CellIndexType,
    cell_index: CellIndexType,
    guessed_value: ICell['guessed_value'],
  ) => void;
  clearGuessedValue: (
    block_index: CellIndexType,
    cell_index: CellIndexType,
  ) => void;
}

export const useGrid = create<GridStore>()(
  immer((set, get) => {
    return {
      grid: {} as IGrid,
      is_fetching: false,
      mistakes_count: 0,
      unresolved_count: TOTAL_CELLS_COUNT,
      is_resolved: false,
      checkIfResolved: () => {
        set((state) => {
          if (state.unresolved_count > 0) return {};
          return {
            is_resolved: true,
          };
        });
        if (get().is_resolved) {
          useTimer.getState().stop();
        }
      },
      fetchGrid: () => {
        set((state) => {
          return {
            unresolved_count: state.unresolved_count - 32,
            grid: fetchSudokiGrid(),
            mistakes_count: 0,
          };
        });
        useTimer.getState().reset();
        useTimer.getState().unpause();
      },
      setGuessedValue: (
        block_index: CellIndexType,
        cell_index: CellIndexType,
        guessed_value: ICell['guessed_value'],
      ) => {
        return set((state) => {
          const guessed_right =
            state.grid[block_index][cell_index].value === guessed_value;

          if (guessed_right) {
            state.grid[block_index][cell_index].is_resolved = true;
            state.unresolved_count -= 1;
          } else {
            state.mistakes_count += 1;
          }

          state.grid[block_index][cell_index].is_value_guessed = true;
          state.grid[block_index][cell_index].guessed_value = guessed_value;
          get().checkIfResolved();
        });
      },
      clearGuessedValue: (
        block_index: CellIndexType,
        cell_index: CellIndexType,
      ) => {
        return set((state) => {
          state.grid[block_index][cell_index].is_value_guessed = false;
          state.grid[block_index][cell_index].guessed_value = 0;
        });
      },
    };
  }),
);
