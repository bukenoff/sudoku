import { it, describe, expect, beforeEach } from 'vitest';

import { TOTAL_CELLS_COUNT } from '~/constants';

import { useGrid } from '../grid.store';
import { useTimer } from '../timer.store';
import { IGrid } from '~/types';

beforeEach(() => {
  useGrid.setState({
    grid: {} as IGrid,
    is_fetching: false,
    mistakes_count: 0,
    unresolved_count: TOTAL_CELLS_COUNT,
    is_resolved: false,
  });

  useTimer.setState({
    interval: null,
    time: 0,
    is_paused: true,
    is_stopped: true,
  });
});

describe('Grid store:', () => {
  it('should make grid', () => {
    useGrid.getState().fetchGrid();
    const is_grid_not_empty = Boolean(
      Object.keys(useGrid.getState().grid).length,
    );

    expect(is_grid_not_empty).toBe(true);
  });

  it('should initialize easy grid with correct unresolved count', () => {
    useGrid.getState().fetchGrid();
    const expected_unresolved_count = TOTAL_CELLS_COUNT - 32;

    expect(expected_unresolved_count).toEqual(
      useGrid.getState().unresolved_count,
    );
  });
});
