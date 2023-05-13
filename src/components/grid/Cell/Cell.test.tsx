import React from 'react';
import { it, describe, expect, afterEach } from 'vitest';

import { render, fireEvent, cleanup } from '~/test.utils';
import { StoresProvider } from '~/stores';

import { Cell } from './Cell';

afterEach(() => {
  cleanup();
});

describe('Cell component:', () => {
  it('should render without crash', () => {
    const { getByTestId } = render(
      <StoresProvider>
        <Cell
          is_resolved={true}
          value={5}
          guessed_value={5}
          block_index={1}
          cell_index={2}
          is_highlighted={false}
        />
        ,
      </StoresProvider>,
    );
    const cell_component = getByTestId('cell_root');
    expect(cell_component).toBeInTheDocument();
  });

  it('should not render any value', () => {
    const { getByTestId } = render(
      <StoresProvider>
        <Cell
          is_resolved={false}
          value={5}
          guessed_value={0}
          block_index={1}
          cell_index={2}
          is_highlighted={false}
        />
        ,
      </StoresProvider>,
    );
    const cell_value = getByTestId('cell_value');
    expect(cell_value.textContent).toEqual('');
  });

  it('should render digits selection', () => {
    const { getByTestId } = render(
      <StoresProvider>
        <Cell
          is_resolved={false}
          value={5}
          guessed_value={0}
          block_index={1}
          cell_index={2}
          is_highlighted={false}
        />
        ,
      </StoresProvider>,
    );
    const cell_component_value = getByTestId('cell_value');

    fireEvent.click(cell_component_value.children[0]);

    const digits_selection_root = getByTestId('digits_selection_root');

    expect(digits_selection_root).toBeInTheDocument();
  });

  it('should highlight value red when it is not equal to guessed value', () => {
    const { getByTestId } = render(
      <StoresProvider>
        <Cell
          is_resolved={false}
          value={5}
          guessed_value={0}
          block_index={1}
          cell_index={2}
          is_highlighted={false}
        />
        ,
      </StoresProvider>,
    );

    const cell_value = getByTestId('cell_value');
    expect(cell_value.children[0]).toHaveStyle('color: red');
  });
});
