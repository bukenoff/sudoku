import React, { FC, MouseEventHandler } from 'react';

import { DIGITS } from '~/constants';
import type { ICell } from '~/types';

import * as Styled from './DigitsSelection.styles';
import { GridStore } from '~/stores';

export interface DigitsSelectionProps {
  block_index: ICell['block_index'];
  cell_index: ICell['cell_index'];
  clearGuessedValue: GridStore['clearGuessedValue'];
  setGuessedValue: GridStore['setGuessedValue'];
}

export const DigitsSelection: FC<DigitsSelectionProps> = ({
  block_index,
  cell_index,
  setGuessedValue,
  clearGuessedValue,
}) => {
  const onDigitClick: MouseEventHandler<HTMLSpanElement> = (event) => {
    if (!event.currentTarget.dataset.digit) return;

    setGuessedValue(
      block_index,
      cell_index,
      +event.currentTarget.dataset.digit as ICell['guessed_value'],
    );
  };

  const onClearClick = () => {
    clearGuessedValue(block_index, cell_index);
  };

  return (
    <Styled.Root data-testid="digits_selection_root">
      <Styled.ArrowUp />
      {DIGITS.map((digit) => (
        <Styled.DigitItem
          key={digit}
          data-digit={digit}
          data-testid={`digits_${digit}`}
          onClick={onDigitClick}
        >
          {digit}
        </Styled.DigitItem>
      ))}
      <Styled.ClearButton
        onClick={onClearClick}
        type="button"
        data-testid="digits_clear"
      >
        Clear
      </Styled.ClearButton>
    </Styled.Root>
  );
};
