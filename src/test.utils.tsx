/* eslint-disable import/export */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    // @ts-ignore
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from '@testing-library/react';
export { userEvent };
// override render export
export { customRender as render };
