import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import type { IBlock } from '~/types';
import { useStores } from '~/stores';

import Cell from '../Cell';
import * as Styled from './styles';

export interface BlockProps {
  block: IBlock;
}

export const Block: FC<BlockProps> = observer(({ block }) => {
  return (
    <Styled.Root>
      {Object.values(block).map((cell) => (
        <Cell
          key={cell.id}
          is_resolved={cell.is_resolved}
          value={cell.value}
          guessed_value={cell.guessed_value}
          block_index={cell.block_index}
          cell_index={cell.cell_index}
        />
      ))}
    </Styled.Root>
  );
});
