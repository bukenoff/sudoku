import { create } from 'zustand';

interface TimerStore {
  interval: null | number;
  time: number;
  is_paused: boolean;
  is_stopped: boolean;
  incrementTime: VoidFunction;
  pause: VoidFunction;
  reset: VoidFunction;
  unpause: VoidFunction;
  stop: VoidFunction;
}

export const useTimer = create<TimerStore>((set) => ({
  interval: null,
  time: 0,
  is_paused: true,
  is_stopped: true,
  incrementTime: () => set((state) => ({ time: state.time + 1 })),
  pause: () => {
    set((state) => {
      if (state.interval) {
        clearInterval(state.interval);
      }

      return {
        is_paused: true,
        is_stopped: true,
        interval: null,
      };
    });
  },
  reset: () => {
    set((state: any) => {
      if (state.interval) {
        clearInterval(state.interval);
      }

      return { time: 0, interval: null };
    });
  },
  unpause: () => {
    set(() => {
      return {
        interval: setInterval(
          () => set((state) => ({ time: state.time + 1 })),
          1000,
        ),
        is_paused: false,
        is_stopped: false,
      };
    });
  },
  stop: () => {
    set((state) => {
      if (state.interval) {
        clearInterval(state.interval);
      }

      return {
        is_stopped: true,
        interval: null,
      };
    });
  },
}));
