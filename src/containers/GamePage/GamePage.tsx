import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '~/components/grid/Grid';
import { useStores } from '~/stores/stores.provider';
import * as Styled from './styles';
import PauseOverlay from '~/components/overlays/PauseOverlay';
import { RouteComponentProps, useHistory } from 'react-router';
import { Difficulty } from '~/models';

type GamePageProps = RouteComponentProps<{ difficulty: Difficulty }>;

export const GamePage: FC<GamePageProps> = observer(({ match }) => {
  const {
    grid_store: { fetchGrid, grid, is_fetching, is_resolved },
    timer_store: { is_paused },
  } = useStores();

  const history = useHistory();

  useEffect(() => {
    fetchGrid(match.params.difficulty);
  }, []);

  useEffect(() => {
    is_resolved && history.push('/scores');
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
