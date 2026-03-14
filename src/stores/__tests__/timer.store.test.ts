import { it, describe, expect, beforeEach } from 'vitest';

import { useTimer } from '../timer.store';

beforeEach(() => {
  useTimer.setState({
    interval: null,
    time: 0,
    is_paused: true,
    is_stopped: true,
  });
});

describe('Timer store:', () => {
  it('should unpause the timer, and set interval to update the time', () => {
    useTimer.getState().unpause();

    expect(useTimer.getState().is_paused).toBe(false);
    expect(useTimer.getState().interval).not.toBeNull();
  });

  it('should reset timer', async () => {
    useTimer.getState().incrementTime();
    useTimer.getState().incrementTime();

    useTimer.getState().reset();

    expect(useTimer.getState().time).toBe(0);
  });

  it('should increment timer', async () => {
    useTimer.getState().incrementTime();
    useTimer.getState().incrementTime();
    useTimer.getState().incrementTime();

    expect(useTimer.getState().time).toBe(3);
  });
});
