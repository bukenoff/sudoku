import React from 'react';
import { render } from '@testing-library/react';
import { ExampleComponent } from './ExampleComponent';

test('renders without crash', () => {
  const { getByTestId } = render(<ExampleComponent text="hello world" />);
  const component = getByTestId('example-component');
  expect(component).toBeInTheDocument();
  expect(component.innerHTML).toBe('<h1>hello world</h1>');
});
