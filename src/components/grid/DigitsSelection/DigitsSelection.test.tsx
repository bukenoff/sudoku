import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DigitsSelection } from './DigitsSelection';

describe('DigitsSelection component:', () => {
  it('should render without crash', () => {
    const setGuessedValueMock = jest.fn();

    const { getByTestId } = render(
      <DigitsSelection setGuessedValue={setGuessedValueMock} />,
    );
    const root_component = getByTestId('digits_selection_root');
    expect(root_component).toBeInTheDocument();
  });

  it('should render digits selection', () => {
    const setGuessedValueMock = jest.fn();
    const { getByTestId } = render(
      <DigitsSelection setGuessedValue={setGuessedValueMock} />,
    );
    const number_nine = getByTestId('digits_9');

    fireEvent.click(number_nine);

    expect(setGuessedValueMock).toBeCalled();
    expect(setGuessedValueMock).toBeCalledWith(9);
  });
});
