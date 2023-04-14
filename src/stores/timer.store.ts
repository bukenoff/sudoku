import { action, observable, makeObservable } from 'mobx';

export class TimerStore {
  interval: ReturnType<typeof setInterval> | null = null;
  time = 0;
  is_paused = true;
  is_stopped = true;

  constructor() {
    makeObservable(this, {
      time: observable,
      is_paused: observable,
      is_stopped: observable,
      incrementTime: action,
      pause: action,
      reset: action,
      unpause: action,
      stop: action,
    });
  }

  incrementTime = (): void => {
    this.time += 1;
  };

  pause = (): void => {
    this.is_paused = true;
    this.is_stopped = true;

    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  reset = (): void => {
    this.time = 0;
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  unpause = (): void => {
    this.interval = setInterval(this.incrementTime, 1000);
    this.is_paused = false;
    this.is_stopped = false;
  };

  stop = (): void => {
    this.is_stopped = true;

    if (this.interval) {
      clearInterval(this.interval);
    }
  };
}
