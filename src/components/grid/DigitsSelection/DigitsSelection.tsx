import React, { FC, MouseEventHandler } from 'react';

import { DIGITS } from '~/constants';
import { GridStore } from '~/stores';
import type { ICell } from '~/types';

import * as Styled from './styles';

export interface DigitsSelectionProps {
  block_index: ICell['block_index'];
  cell_index: ICell['cell_index'];
  clearGuessedValue: typeof GridStore.prototype.clearGuessedValue;
  setGuessedValue: typeof GridStore.prototype.setGuessedValue;
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
