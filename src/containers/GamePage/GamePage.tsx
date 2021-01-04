import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '~/components/grid/Grid';
import { useStores } from '~/stores/stores.provider';
import * as Styled from './styles';

export const GamePage: FC = observer(() => {
  const {
    grid_store: { fetchGrid, grid, is_fetching },
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
    </Styled.Root>
  );
});
