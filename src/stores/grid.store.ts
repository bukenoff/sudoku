import { action, observable, makeObservable } from 'mobx';
import { fetchSudokiGrid } from '~/constants/mocks';
import { IGrid, CellIndexType, ICell } from '~/types';
import { TimerStore } from './timer.store';

export class GridStore {
  constructor(private timer_store: TimerStore) {
    makeObservable(this);
  }

  @observable grid: IGrid = {} as IGrid;
  @observable is_fetching = false;
  @observable mistakes_count = 0;

  @action
  fetchGrid = async (difficulty: 'easy' | 'medium' | 'hard'): Promise<void> => {
    this.is_fetching = true;
    this.grid = await fetchSudokiGrid(difficulty);
    this.is_fetching = false;
    this.timer_store.reset();
    this.timer_store.unpause();
  };

  @action
  setGuessedValue = (
    block_index: CellIndexType,
    cell_index: CellIndexType,
    guessed_value: ICell['guessed_value'],
  ): void => {
    const guessed_right =
      this.grid[block_index][cell_index].value === guessed_value;

    if (!guessed_right) {
      this.mistakes_count += 1;
    }

    this.grid[block_index][cell_index].is_value_guessed = true;
    this.grid[block_index][cell_index].guessed_value = guessed_value;
  };

  @action
  clearGuessedValue = (
    block_index: CellIndexType,
    cell_index: CellIndexType,
  ): void => {
    this.grid[block_index][cell_index].is_value_guessed = false;
    this.grid[block_index][cell_index].guessed_value = 0;
  };

  @action
  clearGrid = (): void => {
    const block_indexes = (Object.keys(
      this.grid,
    ) as unknown) as CellIndexType[];

    block_indexes.forEach((block_index) => {
      Object.values(this.grid[block_index]).forEach((cell) => {
        if (cell.is_resolved) return;

        cell.guessed_value = 0;
        cell.is_value_guessed = false;
      });
    });
  };
}
