import React from 'react';
import { it, describe, expect, vi } from 'vitest';

import { render, fireEvent } from '~/test.utils';

import { DigitsSelection, DigitsSelectionProps } from './DigitsSelection';

describe('DigitsSelection component:', () => {
  it('should render without crash', () => {
    const setGuessedValueMock = vi.fn() as DigitsSelectionProps['setGuessedValue'];
    const clearGuessedValueMock = vi.fn() as DigitsSelectionProps['clearGuessedValue'];

    const { getByTestId } = render(
      <DigitsSelection
        block_index={1}
        cell_index={5}
        clearGuessedValue={clearGuessedValueMock}
        setGuessedValue={setGuessedValueMock}
      />,
    );
    const root_component = getByTestId('digits_selection_root');
    expect(root_component).toBeInTheDocument();
  });

  it('should render digits selection', () => {
    const setGuessedValueMock = vi.fn() as DigitsSelectionProps['setGuessedValue'];
    const clearGuessedValueMock = vi.fn() as DigitsSelectionProps['clearGuessedValue'];

    const { getByTestId } = render(
      <DigitsSelection
        block_index={1}
        cell_index={5}
        clearGuessedValue={clearGuessedValueMock}
        setGuessedValue={setGuessedValueMock}
      />,
    );
    const number_nine = getByTestId('digits_9');

    fireEvent.click(number_nine);

    expect(setGuessedValueMock).toBeCalled();
    expect(setGuessedValueMock).toBeCalledWith(1, 5, 9);
  });

  it('should call clearGuessedValue function', () => {
    const setGuessedValueMock = vi.fn() as DigitsSelectionProps['setGuessedValue'];
    const clearGuessedValueMock = vi.fn() as DigitsSelectionProps['clearGuessedValue'];

    const { getByTestId } = render(
      <DigitsSelection
        block_index={1}
        cell_index={5}
        clearGuessedValue={clearGuessedValueMock}
        setGuessedValue={setGuessedValueMock}
      />,
    );
    const digits_clear_button = getByTestId('digits_clear');

    fireEvent.click(digits_clear_button);

    expect(clearGuessedValueMock).toBeCalled();
  });
});
