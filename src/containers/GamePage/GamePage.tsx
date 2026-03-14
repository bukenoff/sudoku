import React, { FC, useEffect } from 'react';

import Grid from '~/components/grid/Grid';
import PauseOverlay from '~/components/overlays/PauseOverlay';

import * as Styled from './GamePage.styles';
import { useGrid, useTimer } from '~/stores';

export const GamePage: FC = () => {
  const grid_store = useGrid();
  const timer_store = useTimer();

  useEffect(() => {
    grid_store.fetchGrid();
  }, []);

  return (
    <Styled.Root>
      {grid_store.is_fetching ? (
        <div style={{ color: 'white' }}>loading</div>
      ) : (
        <Grid grid={grid_store.grid} />
      )}
      {timer_store.is_paused && <PauseOverlay />}
    </Styled.Root>
  );
};
