import { action, observable, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { sudoku_mock } from '~/constants/mocks';

export class GridStore {
  constructor() {
    makeObservable(this);
  }

  @observable grid = sudoku_mock;

  getGrid = (): any => {
    Object.keys(this.grid).forEach((block_index) => {
      const cell_indexes = Object.keys(this.grid[+block_index]);

      cell_indexes.forEach((cell_index) => {
        this.grid[+block_index][+cell_index].is_resolved = !!Math.floor(
          Math.random() * 2,
        );
      });
    });

    return this.grid;
  };

  @action
  randomizeGrid = (): void => {};
}
