import React, { FC } from 'react';
import Block from '../Block';
import * as Styled from './styles';

interface Props {
  grid: any;
}

export const Grid: FC<Props> = ({ grid }) => {
  const blocks = Object.keys(grid);

  return (
    <Styled.Root>
      {blocks.map((block) => (
        <Block key={block} block={grid[+block]} />
      ))}
    </Styled.Root>
  );
};
