import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DigitsSelection, IDigitsSelectionProps } from './DigitsSelection';

describe('DigitsSelection component:', () => {
  it('should render without crash', () => {
    const setGuessedValueMock = jest.fn();
    const restProps = {} as IDigitsSelectionProps;

    const { getByTestId } = render(
      <DigitsSelection {...restProps} setGuessedValue={setGuessedValueMock} />,
    );
    const root_component = getByTestId('digits_selection_root');
    expect(root_component).toBeInTheDocument();
  });

  it('should render digits selection', () => {
    const restProps = {} as IDigitsSelectionProps;
    const setGuessedValueMock = jest.fn();
    const { getByTestId } = render(
      <DigitsSelection {...restProps} setGuessedValue={setGuessedValueMock} />,
    );
    const number_nine = getByTestId('digits_9');

    fireEvent.click(number_nine);

    expect(setGuessedValueMock).toBeCalled();
    expect(setGuessedValueMock).toBeCalledWith(9);
  });
});
