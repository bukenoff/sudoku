import React, { FC, MouseEventHandler, useCallback } from 'react';
import * as Styled from './styles';

interface DigitsSelectionProps {
  setGuessedValue: (value: number) => void;
}

export const DigitsSelection: FC<DigitsSelectionProps> = ({
  setGuessedValue,
}) => {
  const onDigitClick: MouseEventHandler<HTMLSpanElement> = useCallback(
    (event) => {
      if (!event.currentTarget.dataset.digit) return;

      setGuessedValue(+event.currentTarget.dataset.digit);
    },
    [setGuessedValue],
  );

  return (
    <Styled.Root data-testid="digits_selection_root">
      <Styled.ArrowUp />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
        <Styled.DigitItem key={digit} data-digit={digit} onClick={onDigitClick}>
          {digit}
        </Styled.DigitItem>
      ))}
      <Styled.ClearButton data-digit=" " onClick={onDigitClick} type="button">
        Clear
      </Styled.ClearButton>
    </Styled.Root>
  );
};
