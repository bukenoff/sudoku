import React, { FC } from 'react';

interface Props {
  text: string;
}

const ExampleComponent: FC<Props> = ({ text }) => {
  return (
    <div data-testid="example-component">
      <h1>{text}</h1>
    </div>
  );
};

export { ExampleComponent, Props };
