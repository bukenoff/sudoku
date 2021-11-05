import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '~/components/grid/Grid';
import { useStores } from '~/stores/stores.provider';
import * as Styled from './styles';
import PauseOverlay from '~/components/overlays/PauseOverlay';
import { RouteComponentProps } from 'react-router';

export const GamePage: FC<
  RouteComponentProps<{ difficulty: 'easy' | 'medium' | 'hard' }>
> = observer(({ match }) => {
  const {
    grid_store: { fetchGrid, grid, is_fetching },
    timer_store: { is_paused },
  } = useStores();

  useEffect(() => {
    fetchGrid(match.params.difficulty);
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
