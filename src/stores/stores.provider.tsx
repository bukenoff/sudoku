import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { GridStore } from './grid.store';
import { TimerStore } from './timer.store';

interface StoresContextType {
  grid_store: GridStore;
  timer_store: TimerStore;
}

const StoresContext = createContext<StoresContextType>({} as StoresContextType);

export const StoresProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  const timer_store = new TimerStore();
  const grid_store = new GridStore(timer_store);

  return (
    <StoresContext.Provider value={{ grid_store, timer_store }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = (): StoresContextType => useContext(StoresContext);
