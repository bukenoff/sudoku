import React, { FC, MouseEventHandler, useCallback } from 'react';
import * as Styled from './styles';
import { DIGITS } from '~/constants/digits';
import { CellIndexType, ICell } from '~/types';

export interface IDigitsSelectionProps {
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

export const DigitsSelection: FC<IDigitsSelectionProps> = ({
  block_index,
  cell_index,
  setGuessedValue,
  clearGuessedValue,
}) => {
  const onDigitClick: MouseEventHandler<HTMLSpanElement> = useCallback(
    (event) => {
      if (!event.currentTarget.dataset.digit) return;

      setGuessedValue(
        block_index,
        cell_index,
        +event.currentTarget.dataset.digit as ICell['guessed_value'],
      );
    },
    [setGuessedValue, block_index, cell_index],
  );

  const onClearClick = useCallback(() => {
    clearGuessedValue(block_index, cell_index);
  }, [block_index, cell_index]);

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
      <Styled.ClearButton data-digit=" " onClick={onClearClick} type="button">
        Clear
      </Styled.ClearButton>
    </Styled.Root>
  );
};
