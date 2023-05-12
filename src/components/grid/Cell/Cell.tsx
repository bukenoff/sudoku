import React, { FC, KeyboardEventHandler, memo, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { useStores } from '~/stores';
import type { ICell } from '~/types';

import DigitsSelection from '../DigitsSelection';
import * as Styled from './styles';

export interface CellProps {
  is_resolved: boolean;
  value: number;
  guessed_value: ICell['guessed_value'];
  block_index: ICell['block_index'];
  cell_index: ICell['cell_index'];
}

export const Cell: FC<CellProps> = memo(
  ({ value, guessed_value, block_index, cell_index, is_resolved }) => {
    const {
      grid_store: { setGuessedValue, clearGuessedValue },
    } = useStores();
    const [is_selected, setSelected] = useState(false);
    const display_digits_selection = is_resolved === false && is_selected;

    const onCellClick = () => setSelected(!is_selected);
    const onClickAway = () => setSelected(false);
    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (/[1-9]/g.test(e.key)) {
        setGuessedValue(block_index, cell_index, +e.key as any); // TODO: Fix any
        setSelected(false);
      }
    };

    return (
      <ClickAwayListener onClickAway={onClickAway} data-testid="cell_root">
        <Styled.Root
          is_resolved={is_resolved}
          value={value}
          guessed_value={guessed_value}
          is_selected={is_selected}
        >
          <span data-testid="cell_value">
            <input
              onClick={onCellClick}
              disabled={is_resolved}
              value={is_resolved ? value : guessed_value || ' '}
              onKeyDown={onKeyDown}
              readOnly
            />
          </span>
          {display_digits_selection && (
            <DigitsSelection
              block_index={block_index}
              cell_index={cell_index}
              setGuessedValue={setGuessedValue}
              clearGuessedValue={clearGuessedValue}
            />
          )}
        </Styled.Root>
      </ClickAwayListener>
    );
  },
);

Cell.displayName = 'Cell';
