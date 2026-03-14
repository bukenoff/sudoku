import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

import { GridStore, useGrid } from './grid.store';
import { useTimer } from './timer.store';

interface StoresContextType {
  grid_store: any;
  timer_store: ReturnType<typeof useTimer>;
}

const StoresContext = createContext<StoresContextType>({} as StoresContextType);

export const StoresProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  const timer_store = useTimer();
  const grid_store = useGrid();

  const value = useMemo(() => ({ grid_store, timer_store }), [
    grid_store,
    timer_store,
  ]);

  return (
    <StoresContext.Provider value={value}>{children}</StoresContext.Provider>
  );
};

export const useStores = (): StoresContextType => useContext(StoresContext);
