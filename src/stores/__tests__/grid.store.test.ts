import { RESOLVED_CELLS_COUNT, TOTAL_CELLS_COUNT } from '~/constants/sudoku';

import { GridStore } from '../grid.store';
import { TimerStore } from '../timer.store';

describe('Grid store:', () => {
  it('should make grid', async () => {
    const timer_store = new TimerStore();
    const grid_store = new GridStore(timer_store);

    await grid_store.fetchGrid('easy');
    const is_grid_not_empty = Boolean(Object.keys(grid_store.grid).length);

    expect(is_grid_not_empty).toBe(true);
  });

  it('should initialize easy grid with correct unresolved count', async () => {
    const timer_store = new TimerStore();
    const grid_store = new GridStore(timer_store);

    await grid_store.fetchGrid('easy');
    const expected_unresolved_count =
      TOTAL_CELLS_COUNT - RESOLVED_CELLS_COUNT['easy'];

    expect(expected_unresolved_count).toEqual(grid_store.unresolved_count);
  });
});
