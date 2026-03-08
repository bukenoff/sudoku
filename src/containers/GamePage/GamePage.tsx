import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams, useNavigate } from 'react-router-dom';

import Grid from '~/components/grid/Grid';
import { useStores } from '~/stores/stores.provider';
import PauseOverlay from '~/components/overlays/PauseOverlay';
import type { Difficulty } from '~/types';

import * as Styled from './GamePage.styles';
import { SCORES } from '~/constants';

export const GamePage: FC = observer(() => {
  const { difficulty } = useParams<{ difficulty: Difficulty }>();
  const navigate = useNavigate();
  const {
    grid_store: { fetchGrid, grid, is_fetching, is_resolved },
    timer_store: { is_paused },
  } = useStores();

  useEffect(() => {
    if (difficulty) {
      fetchGrid(difficulty);
    }
  }, []);

  useEffect(() => {
    is_resolved && navigate(SCORES);
  }, [is_resolved]);

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
