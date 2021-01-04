import { action, observable, makeObservable } from 'mobx';
import { fetchSudokiGrid } from '~/constants/mocks';
import { IGrid } from '~/types';

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
}
