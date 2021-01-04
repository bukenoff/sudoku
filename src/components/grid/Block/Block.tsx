import React, { FC } from 'react';
import Cell from '../Cell';
import * as Styled from './styles';
import { IBlock } from '~/types';
import { useStores } from '~/stores/stores.provider';
import { observer } from 'mobx-react-lite';
export interface IBlockProps {
  block: IBlock;
}

export const Block: FC<IBlockProps> = observer(({ block }) => {
  const {
    grid_store: { setGuessedValue, clearGuessedValue },
  } = useStores();

  return (
    <Styled.Root>
      {Object.values(block).map(
        ({
          id,
          value,
          guessed_value,
          is_resolved,
          block_index,
          cell_index,
        }) => (
          <Cell
            key={id}
            is_resolved={is_resolved}
            value={value}
            guessed_value={guessed_value}
            block_index={block_index}
            cell_index={cell_index}
            setGuessedValue={setGuessedValue}
            clearGuessedValue={clearGuessedValue}
          />
        ),
      )}
    </Styled.Root>
  );
});
