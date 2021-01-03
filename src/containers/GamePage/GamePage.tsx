import React, { FC } from 'react';
import Cell from '~/components/grid/Cell';
import DigitsSelection from '~/components/grid/DigitsSelection';
import Grid from '~/components/grid/Grid';
import { useStores } from '~/stores/stores.provider';

export const GamePage: FC = () => {
  const {
    grid_store: { getGrid },
  } = useStores();

  const grid = getGrid();

  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid grid={grid} />
    </section>
  );
};
