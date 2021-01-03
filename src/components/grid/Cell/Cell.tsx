import React, { FC, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import DigitsSelection from '../DigitsSelection';
import * as Styled from './styles';

export interface ICellProps {
  is_resolved: boolean;
  value: number;
}

export const Cell: FC<ICellProps> = ({ value, is_resolved }) => {
  const [is_selected, setSelected] = useState(false);
  const [guessed_value, setGuessedValue] = useState(0);

  const shoul_display_digits_selection = is_resolved === false && is_selected;

  const onCellClick = () => setSelected(!is_selected);

  const onClickAway = () => setSelected(false);

  return (
    <ClickAwayListener onClickAway={onClickAway} data-testid="cell_root">
      <Styled.Root
        onClick={onCellClick}
        is_resolved={is_resolved}
        style={{
          borderColor: is_resolved
            ? 'black'
            : value === guessed_value
            ? 'black'
            : 'red',
        }}
      >
        <span data-testid="cell_value">
          {is_resolved ? value : guessed_value || ' '}
        </span>
        {shoul_display_digits_selection && (
          <DigitsSelection setGuessedValue={setGuessedValue} />
        )}
      </Styled.Root>
    </ClickAwayListener>
  );
};
