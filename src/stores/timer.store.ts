import { action, observable, makeObservable } from 'mobx';

export class TimerStore {
  interval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    makeObservable(this);
  }

  @observable time = 0;
  @observable is_paused = true;

  @action
  incrementTime = (): void => {
    this.time += 1;
  };

  @action
  pause = (): void => {
    this.is_paused = true;
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  @action
  reset = (): void => {
    this.time = 0;
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  @action
  unpause = (): void => {
    this.interval = setInterval(this.incrementTime, 1000);
    this.is_paused = false;
  };
}
