import { action, observable, makeObservable } from 'mobx';
import { fetchSudokiGrid } from '~/constants/mocks';
import { IGrid, CellIndexType, ICell } from '~/types';

export class GridStore {
  constructor() {
    makeObservable(this);
  }

  @observable grid: IGrid = {} as IGrid;
  @observable is_fetching = false;

  @action
  fetchGrid = async (): Promise<void> => {
    this.is_fetching = true;
    this.grid = await fetchSudokiGrid();
    this.is_fetching = false;
  };

  @action
  setGuessedValue = (
    block_index: CellIndexType,
    cell_index: CellIndexType,
    guessed_value: ICell['guessed_value'],
  ): void => {
    this.grid[block_index][cell_index].is_value_guessed = true;
    this.grid[block_index][cell_index].guessed_value = guessed_value;
    console.log(`GRID at ${block_index}/${cell_index}`, this.grid);
  };

  @action
  clearGuessedValue = (
    block_index: CellIndexType,
    cell_index: CellIndexType,
  ): void => {
    this.grid[block_index][cell_index].is_value_guessed = false;
    this.grid[block_index][cell_index].guessed_value = 0;
  };
}
