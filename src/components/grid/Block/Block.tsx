import React, { FC } from 'react';

import type { IBlock } from '~/types';

import Cell from '../Cell';
import * as Styled from './Block.styles';
import { useGrid } from '~/stores';

export interface BlockProps {
  block: IBlock;
}

export const Block: FC<BlockProps> = ({ block }) => {
  const grid_store = useGrid();

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
          is_highlighted={cell.is_highlighted}
          setGuessedValue={grid_store.setGuessedValue}
          clearGuessedValue={grid_store.clearGuessedValue}
        />
      ))}
    </Styled.Root>
  );
};
