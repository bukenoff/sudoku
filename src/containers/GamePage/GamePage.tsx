import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '~/components/grid/Grid';
import { useStores } from '~/stores/stores.provider';
import * as Styled from './styles';
import PauseOverlay from '~/components/overlays/PauseOverlay';

export const GamePage: FC = observer(() => {
  const {
    grid_store: { fetchGrid, grid, is_fetching },
    timer_store: { is_paused },
  } = useStores();

  useEffect(() => {
    fetchGrid();
  }, []);

  return (
    <Styled.Root>
      {is_fetching ? (
        <div style={{ color: 'white' }}>loading</div>
      ) : (
        <Grid grid={grid} />
      )}
      {is_paused && <PauseOverlay />}
    </Styled.Root>
  );
});
