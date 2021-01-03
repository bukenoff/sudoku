import React, { createContext, FC, PropsWithChildren, useContext } from 'react';
import { GridStore } from './grid.store';

interface StoresContextType {
  grid_store: GridStore;
}

const StoresContext = createContext<StoresContextType>({} as StoresContextType);

export const StoresProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  const grid_store = new GridStore();

  return (
    <StoresContext.Provider value={{ grid_store }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = (): StoresContextType => useContext(StoresContext);
