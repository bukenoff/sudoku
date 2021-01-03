import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Cell } from './Cell';

describe('Cell component:', () => {
  it('should render without crash', () => {
    const { getByTestId } = render(<Cell is_resolved={true} value={5} />);
    const cell_component = getByTestId('cell_root');
    expect(cell_component).toBeInTheDocument();
  });

  it('should not render value', () => {
    const { getByTestId } = render(<Cell is_resolved={false} value={5} />);
    const cell_value = getByTestId('cell_value');
    expect(cell_value.textContent).toEqual(' ');
  });

  it('should render digits selection', () => {
    const { getByTestId } = render(<Cell is_resolved={false} value={5} />);
    const cell_component = getByTestId('cell_root');

    fireEvent.click(cell_component.children[0]);

    const digits_selection_root = getByTestId('digits_selection_root');

    expect(digits_selection_root).toBeInTheDocument();
  });
});
