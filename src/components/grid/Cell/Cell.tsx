import React, { FC, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import DigitsSelection from '../DigitsSelection';
import * as Styled from './styles';
import { CellIndexType, ICell } from '~/types';

export interface ICellProps {
  is_resolved: boolean;
  value: number;
  guessed_value: ICell['guessed_value'];
  block_index: ICell['block_index'];
  cell_index: ICell['cell_index'];
  clearGuessedValue: (
    block_index: CellIndexType,
    cell_index: CellIndexType,
  ) => void;
  setGuessedValue: (
    block_index: CellIndexType,
    cell_index: CellIndexType,
    guessed_value: ICell['guessed_value'],
  ) => void;
}

export const Cell: FC<ICellProps> = ({
  value,
  guessed_value,
  block_index,
  cell_index,
  is_resolved,
  setGuessedValue,
  clearGuessedValue,
}) => {
  const [is_selected, setSelected] = useState(false);
  const shoul_display_digits_selection = is_resolved === false && is_selected;

  const onCellClick = () => setSelected(!is_selected);
  const onClickAway = () => setSelected(false);

  return (
    <ClickAwayListener onClickAway={onClickAway} data-testid="cell_root">
      <Styled.Root
        onClick={onCellClick}
        is_resolved={is_resolved}
        value={value}
        guessed_value={guessed_value}
      >
        <span data-testid="cell_value">
          {is_resolved ? value : guessed_value || ' '}
        </span>
        {shoul_display_digits_selection && (
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
};
