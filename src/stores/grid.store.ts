import { action, observable, makeObservable, runInAction } from 'mobx';

import {
  RESOLVED_CELLS_COUNT,
  TOTAL_CELLS_COUNT,
  fetchSudokiGrid,
} from '~/constants';
import type { IGrid, CellIndexType, ICell, Difficulty } from '~/types';

import { TimerStore } from './timer.store';

export class GridStore {
  grid: IGrid = {} as IGrid;
  is_fetching = false;
  mistakes_count = 0;
  unresolved_count = TOTAL_CELLS_COUNT;
  is_resolved = false;
  difficulty: Difficulty | null = null;

  constructor(private timer_store: TimerStore) {
    makeObservable(this, {
      grid: observable,
      is_fetching: observable,
      mistakes_count: observable,
      unresolved_count: observable,
      is_resolved: observable,
      difficulty: observable,
      checkIfResolved: action,
      fetchGrid: action,
      setGuessedValue: action,
      clearGuessedValue: action,
      clearGrid: action,
    });
  }

  checkIfResolved = (): void => {
    if (this.unresolved_count > 0) return;

    this.is_resolved = true;
    this.timer_store.stop();
  };

  fetchGrid = async (difficulty: Difficulty): Promise<void> => {
    this.difficulty = difficulty;
    this.is_fetching = true;
    this.unresolved_count -= RESOLVED_CELLS_COUNT[difficulty];
    this.grid = await fetchSudokiGrid(difficulty);
    runInAction(() => (this.is_fetching = false));
    this.timer_store.reset();
    this.timer_store.unpause();
    runInAction(() => (this.mistakes_count = 0));
  };

  setGuessedValue = (
    block_index: CellIndexType,
    cell_index: CellIndexType,
    guessed_value: ICell['guessed_value'],
  ): void => {
    const guessed_right =
      this.grid[block_index][cell_index].value === guessed_value;

    if (guessed_right) {
      this.grid[block_index][cell_index].is_resolved = true;
      this.unresolved_count -= 1;
    } else {
      this.mistakes_count += 1;
    }

    this.grid[block_index][cell_index].is_value_guessed = true;
    this.grid[block_index][cell_index].guessed_value = guessed_value;
    this.checkIfResolved();
  };

  clearGuessedValue = (
    block_index: CellIndexType,
    cell_index: CellIndexType,
  ): void => {
    this.grid[block_index][cell_index].is_value_guessed = false;
    this.grid[block_index][cell_index].guessed_value = 0;
  };

  clearGrid = (): void => {
    const block_indexes = Object.keys(this.grid) as unknown as CellIndexType[];

    block_indexes.forEach((block_index) => {
      Object.values(this.grid[block_index]).forEach((cell) => {
        if (cell.is_resolved) return;

        cell.guessed_value = 0;
        cell.is_value_guessed = false;
      });
    });
  };
}
