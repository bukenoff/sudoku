import { TimerStore } from '../timer.store';

describe('Timer store:', () => {
  it('should unpause the timer, and set interval to update the time', () => {
    const timer_store = new TimerStore();

    timer_store.unpause();

    expect(timer_store.is_paused).toBe(false);
    expect(timer_store.interval).not.toBeNull();
  });

  it('should reset timer to 0', async () => {
    const timer_store = new TimerStore();

    timer_store.incrementTime();
    timer_store.incrementTime();

    await setTimeout(() => {}, 2000);

    timer_store.reset();

    expect(timer_store.time).toBe(0);
  });

  it('should increment timer three times', async () => {
    const timer_store = new TimerStore();

    timer_store.incrementTime();
    timer_store.incrementTime();
    timer_store.incrementTime();

    expect(timer_store.time).toBe(3);
  });
});
